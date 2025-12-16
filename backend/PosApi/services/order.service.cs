using PosApi.Models;

namespace PosApi.Services
{
  public interface IOrderService
  {
    Order CreateOrder(List<CartItem> items);
    IEnumerable<Order> GetAllOrders();
  }

  public class OrderService : IOrderService
  {
    private readonly List<Order> _orders = new();

    public Order CreateOrder(List<CartItem> items)
    {
      var order = new Order
      {
        Id = Guid.NewGuid(),
        TotalPrice = items.Sum(item => item.Price),
        PaidAt = DateTime.Now
      };
      _orders.Add(order);

      return order;
    }


    public IEnumerable<Order> GetAllOrders()
    {
      return _orders;
    }
  }
}