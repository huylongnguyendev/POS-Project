using Microsoft.AspNetCore.Http.HttpResults;
using PosApi.Models;

namespace PosApi.Services
{
  public class CartService
  {

    private readonly Dictionary<Guid, Cart> _carts = new();

    public Cart? GetCart(Guid cartId)
    {
      _carts.TryGetValue(cartId, out var cart);
      return cart;
    }

    public Cart CreateCart()
    {
      var cart = new Cart();
      _carts[cart.Id] = cart;
      
      return cart;
    }

    public void AddItem(Guid cartId, CartItem item)
    {
      if (_carts.TryGetValue(cartId, out var cart))
      {

        var isExisting = cart.Items.FirstOrDefault(i =>
          i.ProductId == item.ProductId
        );
        if (isExisting != null)
        {
          isExisting.Quantity += item.Quantity;
          isExisting.Price = isExisting.Quantity * item.Price;
        }
        else
          cart.Items.Add(item);
      }
    }

    public void ClearCart(Guid cartId)
    {
      if(_carts.TryGetValue(cartId, out var cart))
      {
        cart.Items.Clear();
      }

    }
  }
}