import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
