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

// The createPersistStore function is used to create a WebStorage object that will be used to persist the Redux store.
// The function checks if the code is running on the server or the client and returns the appropriate WebStorage object.
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

// if the code is running on the client, the createWebStorage function is used to create a WebStorage object that will be used to persist the Redux store.
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createPersistStore();

// The persistConfig object is used to configure the redux-persist library. It specifies the key to use for the persisted state,
//the version of the persisted state, and the storage object to use.
const persistConfig = { key: "root", version: 1, storage };

const persistedReducer = persistReducer(persistConfig, shoppingReducer);

// The store variable is created using the configureStore function from the @reduxjs/toolkit library.
export const store = configureStore({
  reducer: { shopping: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // The serializableCheck option is used to configure the middleware to ignore certain actions when checking for serializability.
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// The persistor variable is created using the persistStore function from the redux-persist library.
export let persistor = persistStore(store);

// The RootState type is defined using the ReturnType utility type to extract the return type of the store.getState function.
export type RootState = ReturnType<typeof store.getState>;

// The AppDispatch type is defined as the type of the store.dispatch function.
export type AppDispatch = typeof store.dispatch;
