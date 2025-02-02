import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import iziToast from "izitoast";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const registration = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", user);
      setToken(data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        iziToast.show({
          title: "Error",
          message: "User is already registered or empty fields",
          position: "topCenter",
          color: "red",
        });
        return thunkAPI.rejectWithValue(
          "User is already registered or empty fields"
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", user);
    setToken(data.token);

    return data;
  } catch (error) {
    // console.log(error);
    if (error.response && error.response.status === 400) {
      iziToast.show({
        title: "Error",
        message: "Invalid credentials or empty fields",
        position: "topCenter",
        color: "red",
      });
      return thunkAPI.rejectWithValue("Invalid credentials or empty fields");
    }
    iziToast.show({
      title: "Error",
      message: "Something went wrong. Please try again.",
      position: "topCenter",
      color: "red",
    });

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/logout");
    setToken(data.token);

    clearToken();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
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
