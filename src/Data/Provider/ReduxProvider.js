"use client"
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../Store/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }) => {
  return (
    <div>
      <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
      <Toaster />
     </PersistGate>
    </div>
  );
};

export default ReduxProvider;
