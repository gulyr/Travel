import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    navMenuVisible: false,
    activeSection: '',
  },
  reducers: {
    toggleNavMenu(state) {
      state.navMenuVisible = !state.navMenuVisible
    },
    closeNavMenu(state) {
      state.navMenuVisible = false
    },
    setScrollUpVisible(state, action) {
      state.scrollUpVisible = action.payload
    },
    setActiveSection(state, action) {
      state.activeSection = action.payload
    },
  },
})

export const {
  toggleNavMenu,
  closeNavMenu,
  setScrollUpVisible,
  setActiveSection,
} = menuSlice.actions
export default menuSlice.reducer
