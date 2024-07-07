import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../reducer/Menu.Reducer/Menu.Reducer";
import AddToCartReducer from "../reducer/AddToCart/AddToCart.Reducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import AuthReducer from "../reducer/Auth.Reducer/Auth.Reducer";
import OrderReducer from "../reducer/Order.Reducer/Order.Reducer";
const persistConfig = {
  key: "auth",
  storage,
};
const persistedReducer = persistReducer(persistConfig, AuthReducer);
export const store = configureStore({
  reducer: {
    menus: MenuReducer,
    cartItem: AddToCartReducer,
    auth: persistedReducer,
    order: OrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
