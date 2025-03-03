import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  shippingMethod: "Standard", // Default shipping method
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalAmount -= state.cartItems[index].price;
        state.cartItems.splice(index, 1);
      }
    },
    setShippingMethod: (state, action) => {
      state.shippingMethod = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setShippingMethod } = cartSlice.actions;
export default cartSlice.reducer;
