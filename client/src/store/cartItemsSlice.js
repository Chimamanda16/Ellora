// cartItemsSlice.js
import { createSlice } from "@reduxjs/toolkit";

function getTotal(products = null) {
  let items = products || JSON.parse(localStorage.getItem("cartItems")) || [];
  return items.reduce((acc, item) => acc + (parseInt(item.productPrice.replace(/\D/g, "")) * item.quantity), 0);
}

function removeItem(state, itemID) {
  let newItems = state.value.filter((item) => item.productId !== itemID);
  localStorage.setItem("cartItems", JSON.stringify(newItems));
  return newItems;
}

const initialState = {
  value: JSON.parse(localStorage.getItem("cartItems")) || [],
  total: getTotal()
};

const cartProducts = createSlice({
  name: "cart-items",
  initialState,
  reducers: {
    clicked: (state, action) => {
      const existing = state.value.find(item => item.productId === action.payload.productId);

      let updatedItems;
      if (existing) {
        updatedItems = state.value.map(item =>
          item.productId === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.value, { ...action.payload, quantity: 1 }];
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      state.value = updatedItems;
      state.total = getTotal(updatedItems);
    },
    removed: (state, action) => {
      const itemId = action.payload;
      const current = removeItem(state, itemId);
      state.value = current;
      state.total = getTotal(current);
    },
    incrementQty: (state, action) => {
      const updated = state.value.map(item =>
        item.productId === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updated));
      state.value = updated;
      state.total = getTotal(updated);
    },
    decrementQty: (state, action) => {
      const updated = state.value.map(item => {
        if (item.productId === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(updated));
      state.value = updated;
      state.total = getTotal(updated);
    }
  }
});

export const { clicked, removed, incrementQty, decrementQty } = cartProducts.actions;
export default cartProducts.reducer;
