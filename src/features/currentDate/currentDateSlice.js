import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDate: null,
};

const currentDateSlice = createSlice({
  name: "currentDate",
  initialState,
  reducers: {
    showCurrentDate(state, action) {
      state.currentDate = action.payload;
    },
  },
});

export const { showCurrentDate } = currentDateSlice.actions;

export default currentDateSlice.reducer;
