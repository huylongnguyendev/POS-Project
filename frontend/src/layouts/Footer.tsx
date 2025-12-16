import { Button } from "../components/ui/button"
import { useAppDispatch, useAppSelector } from "../lib/hooks/redux.hook"
import { clearCart } from "../lib/services/cart.service"
import { createOrder } from "../lib/services/order.service"
import { toast } from "sonner"

export default function Footer() {
  const cart = useAppSelector((state) => state.cart.cart)
  const dispatch = useAppDispatch()

  const calculate = () => {
    if (!cart)
      return 0
    return cart.items.reduce((total, item) => total + item.price, 0)
  }

  const handleCheckout = async () => {
    if (!cart) return
    try {
      await dispatch(createOrder(cart.items))
      await dispatch(clearCart(cart.id))
      toast.success("Thanh toán thành công")
    } catch (error) {
      if (error instanceof Error && "response" in error)
        toast.error(error.message)
    }
  }

  const total = calculate()

  return (
    <>
      <footer className="w-full p-4 fixed bottom-0 z-50 bg-secondary rounded-t-md border">
        <h2 className="font-semibold text-lg">Giỏ hàng</h2>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Tổng tiền: {total.toLocaleString("vn")}đ</p>
          <Button
            disabled={!cart?.items || cart.items.length === 0}
            onClick={handleCheckout}
          >
            Thanh toán
          </Button>
        </div>
      </footer>
    </>
  )
}
