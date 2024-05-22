import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const GENERAL_URL = `${apiUrl}country=ua&category=entertainment&${apiKey}`;

const initialState = {
  entertainment: [],
  status: "idle", //'idle' || 'loading' || 'succeeded' || 'failde'
  error: null,
};

export const fetchEntertainment = createAsyncThunk(
  "entertainment/entertainmentSlice",
  async () => {
    const response = await axios.get(GENERAL_URL);

    return response.data.articles;
  }
);

const entertainmentSlice = createSlice({
  name: "entertainment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEntertainment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEntertainment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entertainment = action.payload;
      })
      .addCase(fetchEntertainment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllEntertainmentNews = (state) =>
  state.entertainment.entertainment;
export const getEntertainmentStatus = (state) => state.entertainment.status;
export const getEntertainmentError = (state) => state.entertainment.error;

export default entertainmentSlice.reducer;
