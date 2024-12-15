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
        },
        close: (state) => {
            state.value = false;
        }
    }
});

export const { open, close} = cartSlice.actions;
export default cartSlice.reducer;