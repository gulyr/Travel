import { configureStore } from '@reduxjs/toolkit'
import menuSliceReducer from './slices/menuSlice'
import scrollUpReducer from './slices/scrollUpSlice.js'

const store = configureStore({
    reducer: {
        menu: menuSliceReducer,
        scrollUp: scrollUpReducer,
    },
})

export default store