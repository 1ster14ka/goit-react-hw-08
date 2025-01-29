import { createSlice } from "@reduxjs/toolkit";
import { registration } from "./authOps";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, actions) => {
      state.user = actions.payload;
      console.log(actions.payload);
    });
  },
});

export const authSlice = slice.reducer;
