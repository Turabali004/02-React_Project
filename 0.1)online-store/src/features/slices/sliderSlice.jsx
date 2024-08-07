import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 0,
    length: sliderData.length,
  },
  reducers: {
    nextSlide(state, action) {
      console.log(action.payload);
      state.value = action.payload == state.length ? 0 : action.payload;
      // state.value = action.payload > length ? 0 :action.payload;
    },
    prevSlide(state, action) {
      console.log(state.value);
      state.value = action.payload < 0 ? state.length : action.payload;
    },
  },
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
