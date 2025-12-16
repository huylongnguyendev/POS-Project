import axios from "axios"

export const base = "http://localhost:5192/api/v1"

export const api = axios.create({
  baseURL: base,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
})