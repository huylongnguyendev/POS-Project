import OrderList from "../components/orders/OrderList"

export default function SubScreen() {
  return (
    <>
      <div className="w-1/3 border h-calc overflow-auto p-4 mt-16 rounded-md space-y-2">
        <h2 className="font-semibold">Lịch sử mua hàng</h2>
        <OrderList />
      </div>
    </>
  )
}
