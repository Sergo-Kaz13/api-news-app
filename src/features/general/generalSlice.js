import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  general: [],
  status: "idle", //'idle' || 'loading' || 'succeeded' || 'failde'
  error: null,
};

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_BASE_URL;

const GENERAL_URL = `${apiUrl}country=ua&pageSize=100&category=general&${apiKey}`;

export const fetchGeneralNews = createAsyncThunk(
  "general/fetchGeneralNews",
  async () => {
    const response = await axios.get(GENERAL_URL);

    console.log(response);

    return response.data.articles;
  }
);

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGeneralNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGeneralNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.general = action.payload;
      })
      .addCase(fetchGeneralNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllGeneralNews = (state) => state.general.general;
export const getGeneralStatus = (state) => state.general.status;
export const getGeneralError = (state) => state.general.error;

export default generalSlice.reducer;

// author
// :
// ""
// content
// :
// ""
// description : ""
// publishedAt
// :
// "2024-05-03T19:30:00Z"
// source
// :
// {id: null, name: 'Tsn.ua'}
// title
// :
// "“Буде масований удар”: Жданов попередив про ракетну атаку по Україні - ТСН"
// url
// :
// "https://tsn.ua/exclusive/bude-masovaniy-udar-zhdanov-poperediv-pro-raketnu-ataku-po-ukrayini-2571348.html"
// urlToImage
// :
// "https://img.tsn
