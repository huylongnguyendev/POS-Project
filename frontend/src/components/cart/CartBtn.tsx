import { ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux.hook"
import { createCart, fetchCart } from "../../lib/services/cart.service"
import type { Cart } from "../../lib/types/cart.type"

export default function CartBtn() {
  const cart = useAppSelector((state) => state.cart.cart)
  const dispatch = useAppDispatch()

  const saveId = (payload: Cart) => {
    const newCart = payload
    if (newCart?.id)
      localStorage.setItem("id", newCart.id)
  }

  useEffect(() => {
    const id = localStorage.getItem("id")

    if (!id) {
      dispatch(createCart()).then((action) => {
        saveId(action.payload)
      })
    } else {
      dispatch(fetchCart(id))
      if (!cart) {
        dispatch(createCart()).then((action) => {
          saveId(action.payload)
        })
      }
    }
  }, [dispatch, cart])

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="relative"
      >
        <ShoppingBag />
        <Badge
          variant="destructive"
          className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 tabular-nums"
        >
          {cart?.items.length}
        </Badge>
      </Button>
    </>
  )
}
