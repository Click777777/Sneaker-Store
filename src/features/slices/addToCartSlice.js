import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
};

export const addToCartSlice = createSlice({
  name: "addToCartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productObj = action.payload;
      try {
        const isExit = state.cart.find(
          (obj) =>
            obj.id === productObj.id &&
            obj.size === productObj.size &&
            obj.color === productObj.color
        ); //check id  and return true or false
        if (isExit) {
          isExit.amount++;
          isExit.totalPrice += productObj.price;
          state.totalAmount++;
          state.totalPrice += productObj.price;
        } else {
          state.cart.push({
            id: productObj.id,
            img: productObj.img,
            name: productObj.name,
            text: productObj.text,
            type: productObj.type,
            size: productObj.size,
            color: productObj.color,
            gender: productObj.gender,
            price: productObj.price,
            amount: 1,
            totalPrice: productObj.totalPrice,
          });
          state.totalAmount++;
          state.totalPrice += productObj.price;
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    reduceCart: (state, action) => {
      const removeProduct = action.payload;
      const isExit = state.cart.find(
        (item) =>
          item.id === removeProduct.id &&
          item.size === removeProduct.size &&
          item.color === removeProduct.color
      );
      if (isExit.amount === 1) {
        const newState = state.cart.filter(
          (item) =>
            item.id !== removeProduct.id ||
            item.size !== removeProduct.size ||
            item.color !== removeProduct.color
        );
        state.cart = newState;
        state.totalAmount--;
        state.totalPrice -= removeProduct.price;
      } else {
        isExit.amount--;
        isExit.totalPrice -= removeProduct.price;
        state.totalAmount--;
        state.totalPrice -= removeProduct.price;
      }
    },
    removeFromCart: (state, action) => {
      const removeProduct = action.payload;
      console.log(removeProduct);
      const isExit = state.cart.find(
        (item) =>
          item.id === removeProduct.id &&
          item.size === removeProduct.size &&
          item.color === removeProduct.color
      );
      console.log(isExit);
      if (isExit) {
        const newState = state.cart.filter(
          (item) =>
            item.id !== isExit.id ||
            item.size !== isExit.size ||
            item.color !== isExit.color
        );
        state.cart = newState;
        state.totalAmount -= isExit.amount;
        state.totalPrice -= isExit.totalPrice;
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, reduceCart, removeFromCart, clearCart } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
