import { ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import CartBox from "./Cart"
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux.hook"
import type { Cart } from "../../lib/types/cart.type"
import { useEffect } from "react"
import { createCart, fetchCart } from "../../lib/services/cart.service"

export default function CartBtn() {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart.cart)

  const saveId = (payload: Cart) => {
    const newCart = payload
    if (newCart?.id)
      localStorage.setItem("id", newCart.id)
  }

  useEffect(() => {
    const id = localStorage.getItem("id")
    console.log(id)
    if (!id) {
      dispatch(createCart()).then((action) => {
        saveId(action.payload)
      })
    } else {
      dispatch(fetchCart(id))
      if (cart === null) {
        dispatch(createCart()).then((action) => {
          saveId(action.payload)
        })
      }
    }
  }, [dispatch])

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="relative group"
      >
        <ShoppingBag />
        <Badge
          variant="destructive"
          className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 tabular-nums"
        >
          {cart?.items.length}
        </Badge>
        <CartBox />
      </Button>
    </>
  )
}
