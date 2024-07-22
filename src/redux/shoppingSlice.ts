import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/types/product-types";
import { act } from "react";

const initialState: StoreState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

interface StoreState {
  productData: IProduct[];
  userInfo: null | string;
  orderData: [];
}

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: IProduct) =>
          item._id === action.payload._id &&
          item?.sizes === action.payload.sizes
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: IProduct) =>
          item._id === action.payload._id &&
          item?.sizes === action.payload.sizes
      );
      existingProduct && existingProduct.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: IProduct) =>
          item._id === action.payload._id &&
          item?.sizes === action.payload.sizes
      );

      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },

    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.sizes !== action.payload
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },
    saveOrder: (state, action) => {
      state.orderData = action.payload;
    },
    resetOrder: (state) => {
      state.orderData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  saveOrder,
  resetOrder,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
