import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";
import currentDateReducer from "../features/currentDate/currentDateSlice";
import generalReducer from "../features/general/generalSlice";
import entertainmentReducer from "../features/entertainment/entertainmentSlice";
import businessReducer from "../features/business/businessSlice";
import sportsReducer from "../features/sports/sportsSlice";
import healthReducer from "../features/health/healthSlice";
import scienceReducer from "../features/science/scienceSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    currentDate: currentDateReducer,
    general: generalReducer,
    entertainment: entertainmentReducer,
    business: businessReducer,
    sports: sportsReducer,
    health: healthReducer,
    science: scienceReducer,
  },
});
