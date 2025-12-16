import { createSlice } from "@reduxjs/toolkit"
import type { Cart } from "../../lib/types/cart.type"
import { addItem, clearCart, createCart, fetchCart } from "../../lib/services/cart.service"

interface CartState {
  cart: Cart | null
  loading: "idle" | "pending" | "succeeded" | "failed"
}

const initialState = {
  cart: null,
  loading: "idle"
} satisfies CartState as CartState

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCart.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.loading = "succeeded"
        state.cart = action.payload
      })
      .addCase(createCart.rejected, (state) => {
        state.loading = "failed"
      })
      .addCase(fetchCart.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = "succeeded"
        state.cart = action.payload
      })
      .addCase(fetchCart.rejected, (state) => {
        state.loading = "failed"
      })
      .addCase(addItem.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.loading = "succeeded"
        state.cart = action.payload
      })
      .addCase(addItem.rejected, (state) => {
        state.loading = "failed"
      })
      .addCase(clearCart.pending, (state) => {
        state.loading = "pending"
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.loading = "succeeded"
        state.cart = action.payload
      })
      .addCase(clearCart.rejected, (state) => {
        state.loading = "failed"
      })
  }
})

const cartReducer = cartSlice.reducer
export default cartReducer