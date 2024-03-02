"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {productReducer} from "@/redux/productRedux"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

let windowObject = {};

if (typeof window !== "undefined") {
  windowObject = window
}

const rootReducer = combineReducers({product: productReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer, windowObject.__REDUX_DEVTOOLS_EXTENSION__ && windowObject.__REDUX_DEVTOOLS_EXTENSION__());

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER]
            }
        })
})


export let persistor = persistStore(store);