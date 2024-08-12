"use client";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/types/product-types";

const initialState: StoreState = {
  favoriteData: [],
  userInfo: null,
  orderData: [],
};

interface StoreState {
  favoriteData: IProduct[];
  userInfo: null | string;
  orderData: [];
}

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {},
  },
});
