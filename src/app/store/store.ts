import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  //   middleware: getDefaultMiddleware =>
  //   // getDefaultMiddleware({
  //   //   serializableCheck: {
  //   //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   //   },
  //   // }),
  //   getDefaultMiddleware().concat(BinanceApi.middleware),
});
export default store;
