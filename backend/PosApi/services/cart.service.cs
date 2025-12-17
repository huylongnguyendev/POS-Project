using Microsoft.AspNetCore.Http.HttpResults;
using PosApi.Models;

namespace PosApi.Services
{
  public class CartService
  {
    private readonly Dictionary<Guid, Cart> _carts = new();

    public Cart? GetCart(Guid id)
    {
      _carts.TryGetValue(id, out var cart);

      return cart;
    }

    public Cart CreateCart()
    {
      var cart = new Cart();
      _carts[cart.Id] = cart;

      return cart;
    }

    public void AddItem(Guid id, CartItem cartItem)
    {
      _carts.TryGetValue(id, out var cart);

      if (cart != null)
      {
        var items = cart.Items;
        var existing = items.FirstOrDefault(
          item => item.ProductId == cartItem.ProductId
        );

        if (existing != null && existing.Price == cartItem.Price)
        {
          existing.Quantity += cartItem.Quantity;
          existing.Price = existing.Quantity * cartItem.Price;
        }
        else
        {
          cartItem.Price *= cartItem.Quantity;
          items.Add(cartItem);
        }
      }
    }

    public void ClearCart(Guid id)
    {
      _carts.TryGetValue(id, out var cart);
      
      if(cart != null)
      {
        cart.Items.Clear();
      }
    }
  }
}