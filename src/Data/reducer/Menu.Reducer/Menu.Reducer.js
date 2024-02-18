import { allMenusAsyncGet } from "@/Data/Action/Menus.Action/Menus.Action";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  allMenus: [],
  isLoading: false,
  isError: false,
};

const menuSlice = createSlice({
  name: "menus",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(allMenusAsyncGet.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(allMenusAsyncGet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.allMenus = action.payload;
    });
    builder.addCase(allMenusAsyncGet.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default menuSlice.reducer;
