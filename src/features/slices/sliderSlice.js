import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

const initialState = {
  value: 1,
  sliderLength: sliderData.length,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlide: (state, action) => {
      state.value = action.payload > state.sliderLength ? 1 : action.payload;
    },
    prevSlide: (state, action) => {
      state.value = action.payload < 1 ? state.sliderLength : action.payload;
    },
    dotSlide: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
