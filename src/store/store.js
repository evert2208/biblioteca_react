import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { biblioSlice } from './biblioteca/biblioSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        biblio: biblioSlice.reducer,
    },
})