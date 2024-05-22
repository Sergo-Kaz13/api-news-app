import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const GENERAL_URL = `${apiUrl}country=ua&category=sports&${apiKey}`;

const initialState = {
  sports: [],
  status: "idle", // 'idle' || 'loading' || 'succeeded' || 'failde'
  error: null,
};

export const fetchSportsNews = createAsyncThunk(
  "sports/fetchSportsNews",
  async () => {
    const response = await axios.get(GENERAL_URL);

    return response.data.articles;
  }
);

const sportsSlice = createSlice({
  name: "sports",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSportsNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSportsNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sports = action.payload;
      })
      .addCase(fetchSportsNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllSportsNews = (state) => state.sports.sports;
export const getSportsStatus = (state) => state.sports.status;
export const getSportsError = (state) => state.sports.error;

export default sportsSlice.reducer;
