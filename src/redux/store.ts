import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";
import shoppingReducer from "./shoppingSlice";
import { WebStorage } from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import logger from "redux-logger";

// Function to create a WebStorage object based on the environment
export function createPersistStore(): WebStorage {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage("local");
}

// Determine the storage to use based on the environment
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();
// Configuration for redux-persist for the shopping slice
const shoppingPersistConfig = {
  key: "shopping",
  version: 1,
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(shoppingPersistConfig, shoppingReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: { shopping: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

// Create the persistor
export let persistor = persistStore(store);

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
