import { createSlice } from "@reduxjs/toolkit"

//Get total price
function getTotal(){
    let products = JSON.parse(localStorage.getItem("cartItems")) || [];
    let total = 0;
    products.forEach(element => {
        let totalStr =  element.productPrice;
        total += parseInt(totalStr.replace(/\D/g, ""));
    });
    return total;
}

function removeItem(state, itemID){
    let currentItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let newItems = currentItems.filter((item) => item.productId !== itemID);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
    return newItems;
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
        },
        removed: (state, action) =>{
            const itemId = action.payload;
            const current = removeItem(state, itemId);
            state.value = current;
            state.total = getTotal();
        }
    }
});

export const { clicked, removed } = cartProducts.actions;
export default cartProducts.reducer;