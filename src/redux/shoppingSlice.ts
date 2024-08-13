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
          item?.color === action.payload.color
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
          item?.color === action.payload.color
      );
      existingProduct && existingProduct.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: IProduct) =>
          item._id === action.payload._id &&
          item?.size === action.payload.size &&
          item?.color === action.payload.color
      );

      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },

    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.color !== action.payload && item.size !== action.payload
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
