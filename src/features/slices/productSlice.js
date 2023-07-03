import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const initialState = {
  products: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
  product: JSON.parse(sessionStorage.getItem("singleData")) || storeData,
  error: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const filterDataByType = storeData.filter(
        (item) => item.type === action.payload
      );
      state.products = filterDataByType;
      state.error = false;
      sessionStorage.setItem("filteredData", JSON.stringify(filterDataByType));
    },

    singleProduct: (state, action) => {
      const singleProduct = storeData.find(
        (item) => item.id === action.payload
      );
      state.product = singleProduct;
      sessionStorage.setItem("singleData", JSON.stringify(singleProduct));
    },

    filterByGender: (state, action) => {
      const genderData = state.products.filter(
        (item) => item.gender === action.payload
      );
      if (genderData.length > 0) {
        state.products = genderData;
        state.error = false;
        sessionStorage.setItem("filteredData", JSON.stringify(genderData));
      } else {
        state.products = [];
        state.error = true;
      }
    },

    sortByPrice: (state) => {
      const price = state.products.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      if (price.length) {
        state.products = price;
        state.error = false;
        sessionStorage.setItem("filteredData", JSON.stringify(price));
      } else {
        state.products = [];
        state.error = true;
      }
    },

    filterByColor: (state, action) => {
      const color = state.products.filter((item) =>
        item.color.find((color) => color === action.payload)
      );
      if (color.length) {
        state.products = color;
        state.error = false;
        sessionStorage.setItem("filteredData", JSON.stringify(color));
      } else {
        state.error = true;
        state.products = [];
      }
    },

    filterBySize: (state, action) => {
      const size = state.products.filter((item) =>
        item.size.find((size) => size === action.payload)
      );
      if (size.length) {
        state.products = size;
        state.error = false;
        sessionStorage.setItem("filteredData", JSON.stringify(size));
      } else {
        state.error = true;
        state.products = [];
      }
    },
  },
});

export const {
  filterProducts,
  singleProduct,
  filterByGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} = productSlice.actions;

export default productSlice.reducer;
