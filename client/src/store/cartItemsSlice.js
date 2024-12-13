import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: JSON.parse(localStorage.getItem("cartItems")) || []
}

const cartProducts = createSlice({
    name: "cart-items",
    initialState,
    reducers: {
        clicked: (state, action) =>{
            let prevItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            localStorage.setItem("cartItems", JSON.stringify([ ...prevItems, action.payload]));
            state.value = JSON.parse(localStorage.getItem("cartItems"));
        }
    }
});

export const { clicked } = cartProducts.actions;
export default cartProducts.reducer;