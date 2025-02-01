import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const authUser = axios.create({
//   baseURL: "https://connections-api.goit.global/",
// });

axios.defaults.baseURL = "https://connections-api.goit.global";

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

// axios.defaults.baseURL = "https://connections-api.goit.global/";

export const registration = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", user);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", user);
    // console.log(data);
    setToken(data.token);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  //   axios.defaults.headers.common.Authorization = "";

  try {
    await axios.post("/users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    // console.log(savedToken);
    if (!savedToken) {
      return thunkAPI.rejectWithValue("Not token");
    }
    setToken(savedToken);

    try {
      const { data } = await axios.get("/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
