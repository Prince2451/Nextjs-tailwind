import { configureStore } from "@reduxjs/toolkit";
import app from "./app";

export function makeStore() {
  return configureStore({
    reducer: {
      app,
    },
  });
}

const store = makeStore();

export default store;
