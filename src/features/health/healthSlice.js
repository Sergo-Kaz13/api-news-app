import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  health: [],
  status: "idle", // 'idle' || 'loading' || 'succeeded' ||'failde'
  error: null,
};

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const GENERAL_URL = `${apiUrl}country=ua&pageSize=100&category=general&${apiKey}`;

export const fetchHealthNews = createAsyncThunk(
  "health/fetchHealthNews",
  async () => {
    const response = await axios.get(GENERAL_URL);

    return response.data.articles;
  }
);

const healthSlice = createSlice({
  name: "health",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHealthNews.pending, (state, action) => {
        state.status = "loaging";
      })
      .addCase(fetchHealthNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.health = action.payload;
      })
      .addCase(fetchHealthNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllHealthNews = (state) => state.health.health;
export const getHealthStatus = (state) => state.health.status;
export const getHealthError = (state) => state.health.error;

export default healthSlice.reducer;
