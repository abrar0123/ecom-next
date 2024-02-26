"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

interface Storee {
  children: React.ReactNode;
}
const StoreProvider = (props: Storee) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
