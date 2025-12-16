import { createAsyncThunk } from "@reduxjs/toolkit"
import { api } from "../api"
import type { CartItemType } from "../types/cart.type"

export const fetchCart = createAsyncThunk("get/cart",
  async (id: string) => {
    const res = await api.get(`/cart/${id}`)
    return res.data
  }
)

export const createCart = createAsyncThunk("create/cart",
  async () => {
    const res = await api.post("/cart/create")
    return res.data
  }
)

export const addItem = createAsyncThunk("addProduct/cart",
  async (params: { id: string, item: CartItemType }) => {
    const res = await api.post(`/cart/${params.id}/add`, params.item)
    console.log(res.data)
    return res.data
  }
)

export const clearCart = createAsyncThunk("clearCart/cart",
  async (id: string) => {
    const res = await api.delete(`/cart/${id}/clear`)
    return res.data
  }
)