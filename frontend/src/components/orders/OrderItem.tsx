import type { OrderItemType } from "../../lib/types/order.type"

export default function OrderItem({ item }: { item: OrderItemType }) {

  const isoString = item.paidAt

  const date = new Date(isoString)
  const formatted = date.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })

  return (
    <>
      <li className="p-2 rounded-md border w-full space-y-2">
        <h3 className="font-semibold">Mã đơn hàng: {item.id}</h3>
        <div className="text-sm text-accent-foreground flex justify-between items-center">
          <p>Ngày mua: {formatted}</p>
          <p>Tổng cộng: {item.totalPrice}</p>
        </div>
      </li>
    </>
  )
}
