import { useEffect, useState } from "react"
import OrderItem from "./OrderItem"
import * as SignalR from "@microsoft/signalr"
import type { OrderItemType } from "../../lib/types/order.type"
import { api, base } from "../../lib/api"

export default function OrderList() {
  const [orders, setOrders] = useState<OrderItemType[]>([])

  useEffect(() => {

    api.get("/orders").then(res => setOrders(res.data)).then((err) => console.log(err))

    const connection = new SignalR.HubConnectionBuilder()
      .withUrl(`${base}/orderHub`, {
        withCredentials: true,
      })
      .withAutomaticReconnect()
      .build()

    connection.on("ReciveOrder", (orders: OrderItemType) => {
      setOrders(prev => [...prev, orders])
    })

    connection.start()
      .then(() => console.log("Kết nối thành công"))
      .catch((err) => console.error(err))

    return () => { connection.stop() }
  }, [])

  if (!orders || orders.length === 0) {
    return (
      <div className="w-full h-96 grid place-items-center">
        <p className="font-semibold">Đơn hàng trống</p>
      </div>
    )
  }

  return (
    <>
      <ul className="space-y-2">
        {

          orders.map(order => (
            <OrderItem key={order.id} item={order} />
          ))
        }
      </ul>
    </>
  )
}
