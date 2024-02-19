"use client"
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import userReducer from './userSlice'
import loginReducer from './loginUsersSlice'


export const store = configureStore({
    reducer:{
        cartsData : cartReducer,
        usersData : userReducer,
        loginsData : loginReducer,
    },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),

})
