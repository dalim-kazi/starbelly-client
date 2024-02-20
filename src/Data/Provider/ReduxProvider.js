"use client"
import React from "react";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import { Toaster } from "react-hot-toast";

const ReduxProvider = ({ children }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
      <Toaster />
    </div>
  );
};

export default ReduxProvider;
