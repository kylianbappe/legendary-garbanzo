"use client";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "user",
  initialState: {
    currentProduct: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    createProductStart: (state) => {
      state.isFetching = true;
    },
    createProductSuccess: (state, action) => {
      state.isFetching = false;
      state.currentProduct = action.payload;
    },
    createProductFailure: (state, error) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  createProductStart,
  createProductSuccess,
  createProductFailure,
} = productSlice.actions;

export default productSlice.reducer