import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state, action) => {
      state.value++;
    },
  },
});

export const { increament } = counterSlice.actions;
export default counterSlice.reducer;
