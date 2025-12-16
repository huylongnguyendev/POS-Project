import { toast } from "sonner"
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux.hook"
import { addItem } from "../../lib/services/cart.service"
import type { CartItemType } from "../../lib/types/cart.type"
import type { ProductType } from "../../lib/types/product.type"
import { Button } from "../ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

export default function ProductItem({ item }: { item: ProductType }) {
  const { id, name, price, stock } = item
  const cart = useAppSelector((state) => state.cart.cart)
  const dispatch = useAppDispatch()

  const handleAddProduct = async () => {
    const cartId = cart?.id
    const cartItem: CartItemType = { productId: id, name, price, quantity: 1 }
    if (cartId) {
      try {
        const params = { id: cartId, item: { ...cartItem } }
        await dispatch(addItem(params))
        toast.success("Thêm vào giỏ hàng thành công")
      } catch (error) {
        if (error instanceof Error && "response" in error)
          toast.error(error.message)
      }
    }
  }

  return (
    <>
      <Card>
        <CardHeader className="gap-1">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="font-semibold text-primary ms-auto text-lg">{price.toLocaleString("vn")}đ</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto">
          <Button
            disabled={stock <= 0}
            className="w-full"
            onClick={handleAddProduct}
          >
            Thêm vào giỏ hàng
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
