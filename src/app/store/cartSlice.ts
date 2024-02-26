"use client";

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: {
    modalshow: false,
    name: "abrar-hussain",
  },
  name: "test",
  reducers: {
    modalDisplay: (state, actions) => {
      const value = actions.payload.showModal;
      state.modalshow = value;
    },
    incHandler: (state, actions) => {
      const value = actions.payload;
      console.log("inc : redux", value);
      state.modalshow = value;
    },
    decHandler: (state, actions) => {
      const value = actions.payload;
      console.log("dec : redux", value);
      state.modalshow = value;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const cartActions = cartSlice.actions;
