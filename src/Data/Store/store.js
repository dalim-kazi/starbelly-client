import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../reducer/Menu.Reducer/Menu.Reducer";
import AddToCartReducer from "../reducer/AddToCart/AddToCart.Reducer";
 

export const store = configureStore({
  reducer: {
    menus: MenuReducer,
    cartItem:AddToCartReducer
  },
});
