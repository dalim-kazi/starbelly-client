const {
  allMenusService,
} = require("@/Data/Services/Menus.Service/Menus.Services");
const { createAsyncThunk, isRejected } = require("@reduxjs/toolkit");
const { default: toast } = require("react-hot-toast");


// menus all get 
export const allMenusAsyncGet = createAsyncThunk("menus/allMenus", async () => {
  try {
    const res = await allMenusService();
    return res;
  } catch (error) {
    toast.error("unable to menu fetch");
    return isRejected(error.message);
  }
});
