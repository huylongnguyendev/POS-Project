import { createSlice } from "@reduxjs/toolkit"
import { createOrder, getAllOrder } from "../../lib/services/order.service"
import type { OrderItemType } from "../../lib/types/order.type"

interface OrderState {
  orders: OrderItemType[]
  loading: "idle" | "pending" | "succeeded" | "failed"
}

const initialState = {
  orders: [],
  loading: "idle"
} satisfies OrderState as OrderState

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = "succeeded"
      })
      .addCase(createOrder.rejected, (state) => {
        state.loading = "failed"
      })
      .addCase(getAllOrder.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(getAllOrder.fulfilled, (state, action) => {
        state.loading = "succeeded"
        state.orders = action.payload
      })
      .addCase(getAllOrder.rejected, (state) => {
        state.loading = "failed"
      })
  }
})

const orderReducer = orderSlice.reducer
export default orderReducer