import { createSlice } from "@reduxjs/toolkit"

//Get total price
function getTotal(){
    let products = JSON.parse(localStorage.getItem("cartItems")) || [];
    let total = 0;
    products.forEach(element => {
                total += parseInt(element.productPrice);
                console.log(total);
    });
    return total;
}

//Initial store state
const initialState = {
    value: JSON.parse(localStorage.getItem("cartItems")) || [],
    total: getTotal()
}

//Create slice
const cartProducts = createSlice({
    name: "cart-items",
    initialState,
    reducers: {
        clicked: (state, action) =>{
            let prevItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            localStorage.setItem("cartItems", JSON.stringify([ ...prevItems, action.payload]));
            state.value = JSON.parse(localStorage.getItem("cartItems")) || [];
            state.total = getTotal();
        }
    }
});

export const { clicked } = cartProducts.actions;
export default cartProducts.reducer;