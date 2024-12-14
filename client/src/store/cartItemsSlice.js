import { createSlice } from "@reduxjs/toolkit"

function getTotal(){
    let products = JSON.parse(localStorage.getItem("cartItems")) || [];
    let total = 0;
    products.forEach(element => {
                total += parseInt(element.productPrice);
                console.log(total);
    });
    return total;
}

const initialState = {
    value: JSON.parse(localStorage.getItem("cartItems")) || [],
    total: getTotal()
}

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