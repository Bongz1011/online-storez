import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import cart reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Register the cart slice
  },
});

export default store;
