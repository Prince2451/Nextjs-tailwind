import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isInitialRender: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInitialRender(state, { payload }: PayloadAction<boolean>) {
      state.isInitialRender = payload;
    },
  },
});

const { setInitialRender } = appSlice.actions;

export { setInitialRender };

export default appSlice.reducer;
