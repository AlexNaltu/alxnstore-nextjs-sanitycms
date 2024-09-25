"use client";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/types/product-types";

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
          item?.size === action.payload.size &&
          item?.color_ === action.payload.color_ &&
          item?.variant_id === action.payload.variant_id
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
          item?.size === action.payload.size &&
          item?.color_ === action.payload.color_
      );
      existingProduct && existingProduct.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: IProduct) =>
          item._id === action.payload._id &&
          item?.size === action.payload.size &&
          item?.color_ === action.payload.color_
      );

      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },

    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item: IProduct) =>
          item._id !== action.payload._id || // Check ID
          item.size !== action.payload.size || // Check Size
          item.color_ !== action.payload.color_ || // Check Color
          item.variant_id !== action.payload.variant_id
      );
      return state;
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
    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      const existingProduct = state.productData.find(
        (item: IProduct) => item._id === id && item.size === size
      );
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
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
  updateQuantity,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
