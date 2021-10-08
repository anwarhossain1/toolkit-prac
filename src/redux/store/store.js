import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";

const store = configureStore({
  reducer: {
    posts: counterSlice,
  },
});
export default store;
