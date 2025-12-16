import React, { Suspense } from "react"

export default function MainScreen() {

  const ProductList = React.lazy(() => import("../components/products/ProductList"))

  return (
    <>
      <div className="w-2/3 border rounded-md mt-16 inset-shadow-xs">
        <div className="h-calc space-y-2 overflow-auto p-4">
          <h2 className="font-semibold">Danh sách sản phẩm</h2>

          <Suspense fallback={<div>loading...</div>}>
            <ProductList />
          </Suspense>
        </div>
      </div>
    </>
  )
}
