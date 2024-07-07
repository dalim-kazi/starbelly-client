import toast from "react-hot-toast";

const { postData, baseAPI } = require("@/Data/Services/CommonService");
const { createAsyncThunk, isRejectedWithValue } = require("@reduxjs/toolkit");

// user signup
export const userSignUpAsync = createAsyncThunk(
  "auth/signUp",
  async (userInfo) => {
    try {
      const url = `${baseAPI}auth/signup`;
      const res = await postData(url, userInfo);
      toast.success("successful");
      return res;
    } catch (error) {
      toast.error("SignUp Filled");
      return isRejectedWithValue(error);
    }
  }
);

// login
export const UserLoginAsync = createAsyncThunk(
  "auth/login",
  async (userInfo) => {
    try {
      const url = `${baseAPI}auth/signIn`;
      const res = await postData(url, userInfo);
      toast.success("successful");
      return res;
    } catch (error) {
      toast.error(error.message);
      return isRejectedWithValue(error);
    }
  }
);
