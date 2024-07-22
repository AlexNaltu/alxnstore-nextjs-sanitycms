import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, WebStorage } from "redux-persist";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";

import shoppingReducer from "./shoppingSlice";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

// Returns a mock storage interface if window is not defined (i.e., on the server), otherwise, it uses createWebStorage.
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

// storage to check if the window object is available
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();

// Configuration for the Redux persist store
const persistConfig = { key: "root", version: 1, storage };

const persistRouter = persistReducer(persistConfig, shoppingReducer);

// Create the Redux store
export const store = configureStore({
  reducer: { shopping: persistRouter },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
