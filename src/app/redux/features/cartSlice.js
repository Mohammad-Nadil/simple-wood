import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  allProducts: [],
  total: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart , removeFromCart , clearCart } = cartSlice.actions;
export default cartSlice.reducer;
