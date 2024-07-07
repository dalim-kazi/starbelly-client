const { orderPostAsync } = require("@/Data/Action/OrderAction/OrderAction");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allOrder: [],
  isLoading: false,
  isError: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(orderPostAsync.pending, (state) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(orderPostAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoading = false;
    });
    builder.addCase(orderPostAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default orderSlice.reducer
