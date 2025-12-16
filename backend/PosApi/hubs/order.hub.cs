using Microsoft.AspNetCore.SignalR;
using PosApi.Models;

namespace PosApi.Hubs
{
  public class OrderHub: Hub
  {
    public async Task SendOrder(Order order)
    {
      await Clients.All.SendAsync("ReciveOrder", order);
    }
  }
}