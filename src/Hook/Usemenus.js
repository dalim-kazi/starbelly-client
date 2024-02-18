"use client"
import { allMenusAsyncGet } from "@/Data/Action/Menus.Action/Menus.Action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useAllMenus = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(allMenusAsyncGet());
    };
    fetchData();
  }, [dispatch]);

  const allMenus = useSelector((state) => state.menus);

  return allMenus;
};