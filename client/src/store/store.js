import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartProducts from "./cartItemsSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        cartItems: cartProducts
    }
});