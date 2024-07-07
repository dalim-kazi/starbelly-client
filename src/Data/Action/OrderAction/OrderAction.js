// post order

const { postData } = require("@/Data/Services/CommonService");
const { createAsyncThunk, isRejectedWithValue } = require("@reduxjs/toolkit");
const { default: toast } = require("react-hot-toast");

export const orderPostAsync = createAsyncThunk(
  "orders/orderPost",
  async (orderInfo) => {
    try {
      const res = await postData(orderInfo);
      toast.success("order Successful");
      return res;
    } catch (error) {
      toast.error("Unable to order");
      return isRejectedWithValue(error);
    }
  }
);
