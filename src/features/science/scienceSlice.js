import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  science: [],
  status: "idle", // 'idle' || 'loading' || 'succeeded' || 'failde'
  error: null,
};

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const GENERAL_URL = `${apiUrl}country=ua&pageSize=100&category=science&${apiKey}`;

export const fetchScienceNews = createAsyncThunk(
  "science/fetchScienceNews",
  async () => {
    const response = await axios.get(GENERAL_URL);

    return response.data.articles;
  }
);

const scienceSlice = createSlice({
  name: "science",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchScienceNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchScienceNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.science = action.payload;
      })
      .addCase(fetchScienceNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllScienceNews = (state) => state.science.science;
export const getScienceStatus = (state) => state.science.status;
export const getScienceError = (state) => state.science.error;

export default scienceSlice.reducer;
