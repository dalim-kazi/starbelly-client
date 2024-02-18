import { createSlice } from "@reduxjs/toolkit";

const getInitialCartState = () => {
  if (typeof window === "undefined") {
    return [];
  }

  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};
const initialState = {
  cartItems: getInitialCartState(),
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    getItemToCart: (state, action) => {
      const items = localStorage.getItem("cart");
      state.cartItems = JSON.parse(items) || [];
    },
  },
});
export const { addItemToCart ,getItemToCart} = addToCartSlice.actions;

export default addToCartSlice.reducer;
