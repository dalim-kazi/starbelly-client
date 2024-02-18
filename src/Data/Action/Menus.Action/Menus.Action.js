import { allMenusService } from "@/Data/Services/Menus.Service/Menus.Services";
import { createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


// menus all get
export const allMenusAsyncGet = createAsyncThunk("menus/allMenusAsyncGe", async () => {
  try {
    const res = await allMenusService();
    return res;
  } catch (error) {
    toast.error("unable to menu fetch");
    return isRejected(error.message);
  }
});
