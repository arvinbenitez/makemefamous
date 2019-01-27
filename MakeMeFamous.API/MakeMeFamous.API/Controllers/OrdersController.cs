using System.Collections.Generic;
using MakeMeFamous.API.Authorization;
using MakeMeFamous.API.Model;
using MakeMeFamous.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MakeMeFamous.API.Controllers
{
    [Route("[controller]")]
    [Authorize]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderRepository orderRepository;

        public OrdersController(IOrderRepository orderRepository)
        {
            this.orderRepository = orderRepository;
        }
        [HttpGet]
        [Authorize]
        public ActionResult<IEnumerable<Order>> Get()
        {
            var session = UserIdentity.GetSession(User);
            if (session == null)
            {
                return Forbid();
            }

            return Ok(orderRepository.GetOrders(session.AccountId));
        }
    }
}