import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "posts/fetchPosts",
  async (payload) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
);
const counterSlice = createSlice({
  name: "posts",
  initialState: {},
  reducers: {
    // increament: (state, action) => {
    //   state.value++;
    // },
    // decreament: (state, action) => {
    //   state.value--;
    // },
    // increase: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

// export const { increament, decreament, increase } = counterSlice.actions;
export default counterSlice.reducer;
