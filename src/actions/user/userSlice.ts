import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
  username: string
}

// Define the initial state using that type
const initialState: UserState = {
  username: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUser: (state, action: PayloadAction<string>) => {
      return { ...state, username: action.payload }
    },
    cleanUser: state => {
      return { ...state, username: '' }
    },
  },
})

// Actions
export const { editUser, cleanUser } = userSlice.actions
// Reducer
export default userSlice.reducer
