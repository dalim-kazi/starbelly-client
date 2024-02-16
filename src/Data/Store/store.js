import MenuReducer from "../reducer/Menu.Reducer/Menu.Reducer";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    menus: MenuReducer,
  },
});
