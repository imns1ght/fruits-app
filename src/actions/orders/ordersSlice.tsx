import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order, Fruit } from '~/types'

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
      else
        state.products.push({
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
        })
    },
    removeProduct: (state, action: PayloadAction<Fruit>) => {
      // check if exists
      const orderIdx = state.products.findIndex(order => order.name === action.payload)

      if (orderIdx !== -1) {
        // if exists, decrease quantity
        if (state.products[orderIdx].quantity > 1) state.products[orderIdx].quantity--
        // if exists and quantity is 0, remove product
        else state.products.splice(orderIdx, 1)
      }
    },
  },
})

// Actions
export const { addProduct, removeProduct } = ordersSlice.actions
// Reducer
export default ordersSlice.reducer
