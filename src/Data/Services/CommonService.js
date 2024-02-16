const { default: axios } = require("axios");
export const baseAPI = import.meta.env.VITE_BaseAPI;

// get data
export const getData = async (url, headers) => {
  try {
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};

