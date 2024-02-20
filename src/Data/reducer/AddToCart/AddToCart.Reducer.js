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
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        newItem.totalPrice=newItem.price
        state.cartItems.push(newItem);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    removeItemFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== idToRemove
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    getItemToCart: (state, action) => {
      const items = localStorage.getItem("cart");
      state.cartItems = JSON.parse(items) || [];
    },
  },
});
export const {
  addItemToCart,
  getItemToCart,
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart
} = addToCartSlice.actions;

export default addToCartSlice.reducer;
