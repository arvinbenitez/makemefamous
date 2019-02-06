using System.Threading.Tasks;
using Amazon;
using Amazon.CognitoIdentityProvider;
using Amazon.CognitoIdentityProvider.Model;
using MakeMeFamous.API.Authorization;
using MakeMeFamous.API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace MakeMeFamous.API.Controllers
{
    [Route("[controller]")]
    //[Authorize]
    public class UserManagementController: ControllerBase
    {
        private readonly AwsConfiguration configuration;
        private readonly RegionEndpoint region = RegionEndpoint.EUWest1;

        public UserManagementController(IOptions<AwsConfiguration> configuration)
        {
            this.configuration = configuration.Value;
        }

        [HttpPost]
        [Route("enablemfa")]
        public async Task<ActionResult<string>> EnableMfa([FromBody] User user)
        {
            var accessToken = await GetAccessToken(user);

            var cognito = new AmazonCognitoIdentityProviderClient(region);
            if (string.IsNullOrEmpty(user.Token))
            {
                var request = new AssociateSoftwareTokenRequest
                {
                    AccessToken = accessToken
                };
                var softwareTokenResponse = await cognito.AssociateSoftwareTokenAsync(request);
                var qrCode =
                    $"otpauth://totp/AWSCognito:{user.Username}?secret={softwareTokenResponse.SecretCode}&issuer=MakeMeFamous";
                return Ok(qrCode);
            }

            //this must be a response
            var response = await cognito.VerifySoftwareTokenAsync(new VerifySoftwareTokenRequest
            {
                AccessToken = accessToken,
                UserCode = user.Token,
                FriendlyDeviceName = "MakeMeFamous Device"
            });

            if (response.Status == VerifySoftwareTokenResponseType.SUCCESS)
            {
                //enable
                var enableResponse = await cognito.SetUserMFAPreferenceAsync(new SetUserMFAPreferenceRequest
                {
                    AccessToken = accessToken,
                    SoftwareTokenMfaSettings = new SoftwareTokenMfaSettingsType
                        {Enabled = true, PreferredMfa = true}
                });
                return Ok();
            }

            return BadRequest();
        }

        private async Task<string> GetAccessToken(User user)
        {
            var cognito = new AmazonCognitoIdentityProviderClient(region);

            var request = new AdminInitiateAuthRequest
            {
                UserPoolId = configuration.UserPoolId,
                ClientId = configuration.UserPoolClientId,
                AuthFlow = AuthFlowType.ADMIN_NO_SRP_AUTH
            };

            request.AuthParameters.Add("USERNAME", user.Username);
            request.AuthParameters.Add("PASSWORD", user.Password);

            var response = await cognito.AdminInitiateAuthAsync(request);
            return response.AuthenticationResult.AccessToken;
        }
    }
}
