using MakeMeFamous.API.Authorization;
using MakeMeFamous.API.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MakeMeFamous.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public static IConfiguration Configuration { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            var awsConfig = Configuration.GetSection("AWS");
            services.Configure<AwsConfiguration>(awsConfig);
            services.AddAuthentication("Bearer").AddJwtBearer(options =>
            {
                options.Audience = awsConfig.GetSection("UserPoolClientId").Value;
                options.Authority = $"https://cognito-idp.{awsConfig.GetSection("UserPoolRegion").Value}.amazonaws.com/{awsConfig.GetSection("UserPoolId").Value}";
            });
            services.AddSingleton<IOrderRepository, OrdersRepository>();
            services.AddCors();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseCors(x =>
            {
                x.AllowAnyHeader();
                x.AllowAnyMethod();
                x.AllowAnyOrigin();
            });
            app.UseMvc();
        }
    }
}
