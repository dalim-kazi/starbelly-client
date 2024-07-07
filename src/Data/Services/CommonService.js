import axios from "axios";

// base api
export const baseAPI = process.env.BaseAPI;
// get data
export const getData = async (url, headers) => {
  try {
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

// post data
export const postData = async (url, values, headers) => {
  try {
    console.log(url, values,)
    const res = await axios.post(url, values, { headers });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
