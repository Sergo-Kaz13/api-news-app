import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const GENERAL_URL = `${apiUrl}country=ua&category=business&${apiKey}`;

const initialState = {
  business: [],
  status: "idle", // 'idle' || 'loading' || 'succeeded' || 'failde'
  error: null,
};

export const fetchBusinessNews = createAsyncThunk(
  "business/fetchBusinessNews",
  async () => {
    const response = await axios.get(GENERAL_URL);

    return response.data.articles;
  }
);

const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBusinessNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBusinessNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.business = action.payload;
      })
      .addCase(fetchBusinessNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllBusinessNews = (state) => state.business.business;
export const getBusinessStatus = (state) => state.business.status;
export const getBusinessError = (state) => state.business.error;

export default businessSlice.reducer;
