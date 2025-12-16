using Microsoft.AspNetCore.Mvc;
using PosApi.Models;
using PosApi.Services;

namespace PosApi.Controllers;

[ApiController]
[Route("api/v1/cart")]
public class CartController : ControllerBase
{
  private readonly CartService _cartService;

  public CartController(CartService cartService)
  {
    _cartService = cartService;
  }

  [HttpPost("create")]
  public IActionResult CreateCart()
  {
    var cart = _cartService.CreateCart();
    return Ok(cart);
  }

  [HttpGet("{id}")]
  public IActionResult GetCart(Guid id)
  {
    var cart = _cartService.GetCart(id);
    if (cart == null) return NotFound();

    return Ok(cart);
  }

  [HttpPost("{id}/add")]
  public IActionResult AddItem(Guid id, [FromBody] CartItem item)
  {
    var cart = _cartService.GetCart(id);
    if (cart == null)
      return NotFound();

    _cartService.AddItem(id, item);
    return Ok(_cartService.GetCart(id));
  }

  [HttpDelete("{id}/clear")]
  public IActionResult ClearCart(Guid id)
  {
    var cart = _cartService.GetCart(id);
    if (cart == null) return NotFound();
    _cartService.ClearCart(cart.Id);

    return Ok(cart);
  }
}