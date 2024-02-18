"use client";
import { getItemToCart } from "@/Data/reducer/AddToCart/AddToCart.Reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UseGetCart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getItemToCart());
    };
    fetchData();
  }, [dispatch]);

  const { cartItems } = useSelector((state) => state.cartItem);
  return cartItems;
};

export default UseGetCart;
