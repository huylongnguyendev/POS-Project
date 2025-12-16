
namespace PosApi.Models
{
  public class Order
  {
    public Guid Id { get; set; } = Guid.NewGuid();
    public int TotalPrice { get; set; }
    public DateTime PaidAt { get; set; }
  }
}