import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        open: (state) =>{
            state.value = true;
            console.log("Value when open:", state.value)
        },
        close: (state) => {
            console.log("Value when closed:", state.value)
            state.value = false;
        }
    }
});

export const { open, close} = cartSlice.actions;
export default cartSlice.reducer;