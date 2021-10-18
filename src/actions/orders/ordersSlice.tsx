import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order } from '~/types'

interface OrdersState {
  products: Order[]
}

const initialState: OrdersState = {
  products: [],
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Order>) => {
      // check if exists
      const orderIdx = state.products.findIndex(order => order.name === action.payload.name)
      // if exists, increment quantity
      if (orderIdx !== -1) state.products[orderIdx].quantity += action.payload.quantity
      // else, add new product
      else state.products.push({ name: action.payload.name, quantity: action.payload.quantity })
    },
    removeProduct: (state, action: PayloadAction<Order>) => {
      // check if exists
      const orderIdx = state.products.findIndex(order => order.name === action.payload.name)
      // if exists, delete product
      if (orderIdx !== -1) state.products.splice(orderIdx, 1)
    },
  },
})

// Actions
export const { addProduct, removeProduct } = ordersSlice.actions
// Reducer
export default ordersSlice.reducer
