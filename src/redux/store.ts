import { configureStore } from '@reduxjs/toolkit'
import ordersReducer from '~/actions/orders/ordersSlice'
import userReducer from '~/actions/user/userSlice'

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {orders: ordersReducer, ...}
export type AppDispatch = typeof store.dispatch
