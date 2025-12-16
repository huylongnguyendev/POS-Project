import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slices/product.slice"
import filterReducer from "./slices/filter.slice"
import cartReducer from "./slices/cart.slice"
import orderReducer from "./slices/order.slice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
    order: orderReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type ASppDispatch = typeof store.dispatch