using MakeMeFamous.API.Authorization;
using MakeMeFamous.API.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MakeMeFamous.API.Controllers
{
    [Route("[controller]")]
    [Authorize]
    public class SessionController : ControllerBase
    {
        [HttpGet]
        public ActionResult<Session> Get()
        {
            return Ok(UserIdentity.GetSession(User));
        }

        [HttpPost]
        [Route("{accountId:int}")]
        public void Post(int accountId)
        {
            UserIdentity.StartSession(User, accountId);
        }
    }
}