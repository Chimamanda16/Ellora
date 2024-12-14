import { createSlice } from "@reduxjs/toolkit"

function getTotal(){
    let products = JSON.parse(localStorage.getItem("cartItems")) || [];
    let total = 0;
    products.forEach(element => {
                console.log(total);
                total += parseInt(element.productPrice);
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
            state.value = prevItems;
            state.total = getTotal();
        }
    }
});

export const { clicked } = cartProducts.actions;
export default cartProducts.reducer;