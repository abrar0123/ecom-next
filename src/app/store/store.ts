import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { authApi } from "./authApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getdm) =>
    getdm({ serializableCheck: false }).concat(authApi.middleware),
});
export default store;
