using System.Collections.Generic;
using MakeMeFamous.API.Model;

namespace MakeMeFamous.API.Services
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetOrders(int accountId);
    }
}
