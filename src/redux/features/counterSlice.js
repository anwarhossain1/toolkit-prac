import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "posts",
  initialState: {
    value: 0,
  },
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
});

// export const { increament, decreament, increase } = counterSlice.actions;
export default counterSlice.reducer;
