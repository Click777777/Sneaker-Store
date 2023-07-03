import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice";
import productReducer from "../features/slices/productSlice";
import addToCartReducer from "../features/slices/addToCartSlice";
import authReducer from "../features/slices/authSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productReducer,
    addToCartSlice: addToCartReducer,
    authSlice: authReducer,
  },
});
