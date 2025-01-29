import { createSlice } from "@reduxjs/toolkit";
import { login, registration } from "./authOps";

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
      state.user.name = actions.payload.user.name;
      state.user.email = actions.payload.user.email;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
      console.log(actions.payload);
    });
    //   .addCase(login.fulfilled, (state, actions) => {
    //     state.isLoggedIn = true;
    //   });
  },
});

export const authSlice = slice.reducer;
