import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./js/reducers/allReducers";

const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;