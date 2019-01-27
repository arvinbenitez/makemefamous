using System.Collections.Generic;
using System.Linq;
using MakeMeFamous.API.Model;

namespace MakeMeFamous.API.Services
{
    public class OrdersRepository : IOrderRepository

    {
        private IEnumerable<Order> orders = new List<Order>
        {
            new Order {Id = 1, NodeName = "Order 1", AccountId = 1},
            new Order {Id = 2, NodeName = "Order 2", AccountId = 1},
            new Order {Id = 3, NodeName = "Order 3", AccountId = 1},
            new Order {Id = 4, NodeName = "Order 4", AccountId = 1},
            new Order {Id = 5, NodeName = "Order 5", AccountId = 1},
            new Order {Id = 6, NodeName = "Order 6", AccountId = 1},
            new Order {Id = 7, NodeName = "Order 7", AccountId = 1},
            new Order {Id = 8, NodeName = "Order 8", AccountId = 2},
            new Order {Id = 9, NodeName = "Order 9", AccountId = 2},
            new Order {Id = 10, NodeName = "Order 10", AccountId = 2},
            new Order {Id = 11, NodeName = "Order 11", AccountId = 2},
            new Order {Id = 12, NodeName = "Order 12", AccountId = 2},
            new Order {Id = 13, NodeName = "Order 13", AccountId = 1},
            new Order {Id = 14, NodeName = "Order 14", AccountId = 3},
            new Order {Id = 15, NodeName = "Order 15", AccountId = 3},
            new Order {Id = 16, NodeName = "Order 16", AccountId = 3},
            new Order {Id = 17, NodeName = "Order 17", AccountId = 3},
            new Order {Id = 18, NodeName = "Order 18", AccountId = 3}
        };

        public IEnumerable<Order> GetOrders(int accountId)
        {
            return orders.Where(x => x.AccountId == accountId);
        }
    }
}