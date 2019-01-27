using System.Collections.Generic;
using MakeMeFamous.API.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MakeMeFamous.API.Controllers
{
    [Route("[controller]")]
    [Authorize]
    public class AccountsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Account>> Get()
        {
            return Ok(new List<Account>
            {
                new Account {Id = 1, Name = "Account 1"},
                new Account {Id = 2, Name = "Account 2"},
                new Account {Id = 3, Name = "Account 3"}
            });
        }
    }
}