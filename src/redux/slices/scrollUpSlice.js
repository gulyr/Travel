import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  scrollUpVisible: false,
}

const scrollUpSlice = createSlice({
  name: 'scrollUp',
  initialState,
  reducers: {
    setScrollUpVisible(state, action) {
      state.scrollUpVisible = action.payload
    },
  },
})

export const { setScrollUpVisible } = scrollUpSlice.actions

export default scrollUpSlice.reducer
