using Microsoft.AspNetCore.Mvc;
using PosApi.Models;
using PosApi.Services;

namespace PosApi.Controllers
{
  [ApiController]
  [Route("api/v1/carts")]
  public class CartController : ControllerBase
  {
    private readonly CartService _cartService;

    public CartController(CartService cartService)
    {
      _cartService = cartService;
    }

    [HttpGet("{id}")]
    public IActionResult GetCartById(Guid id)
    {
      var cart = _cartService.GetCart(id);
      if (cart == null) return NotFound();

      return Ok(cart);
    }

    [HttpPost]
    public IActionResult CreateCart()
    {
      var cart = _cartService.CreateCart();
      return Ok(cart);
    }

    [HttpPost("{id}/add")]
    public IActionResult AddItem(Guid id, [FromBody] CartItem item)
    {
      _cartService.AddItem(id, item);
      return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult ClearCart(Guid id)
    {
      _cartService.ClearCart(id);
      return Ok();
    }
  }
}