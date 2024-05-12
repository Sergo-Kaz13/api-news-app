import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=9f5a8c3a8eee4c10aa2b136989b12436";

const initialState = {
  news: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(BASE_URL);
  return response.data.articles;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllNews = (state) => state.news.news;
export const getNewsStatus = (state) => state.news.status;
export const getNewsError = (state) => state.news.error;

export const {} = newsSlice.actions;

export default newsSlice.reducer;
