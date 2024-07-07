const {
  userSignUpAsync,
  UserLoginAsync,
} = require("@/Data/Action/Auth.Action/Auth.Action");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  allUser: [],
  isLoading: false,
  isError: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {
    //   signUp
    builder.addCase(userSignUpAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(userSignUpAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUser = action.payload;
      state.isError = false;
    });
    builder.addCase(userSignUpAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    // login
    builder.addCase(UserLoginAsync.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(UserLoginAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allUser = action.payload;
    });
    builder.addCase(UserLoginAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default authSlice.reducer