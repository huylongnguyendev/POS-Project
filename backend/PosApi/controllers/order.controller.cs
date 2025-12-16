using Microsoft.AspNetCore.SignalR;
using PosApi.Models;
using PosApi.Hubs;
using PosApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace PosApi.Controllers
{
  [ApiController]
  [Route("/api/v1/orders")]
  public class OrderController : ControllerBase
  {
    private readonly IOrderService _orderService;
    private readonly IHubContext<OrderHub> _hubContext;

    public OrderController(IOrderService orderService, IHubContext<OrderHub> hubContext)
    {
      _orderService = orderService;
      _hubContext = hubContext;
    }

    [HttpGet]
    public IActionResult GetOrders()
    {
      var orders = _orderService.GetAllOrders();
      return Ok(orders);
    }

    [HttpPost("create")]
    public async Task<IActionResult> CreateOrder([FromBody] List<CartItem> items)
    {
      if (items == null || !items.Any())
        return BadRequest("Giỏ hàng trống");

      var order = _orderService.CreateOrder(items);

      await _hubContext.Clients.All.SendAsync("ReciveOrder", order);

      return Ok(order);
    }
  };

}