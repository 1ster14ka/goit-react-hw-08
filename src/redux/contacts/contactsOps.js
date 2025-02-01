import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setToken } from "../auth/authOps";
import "izitoast/dist/css/iziToast.min.css";
import iziToast from "izitoast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    setToken(token);

    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (user, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    setToken(token);

    if (!user.name || !user.email) {
      iziToast.show({
        title: "Error",
        message: "Please fill in all fields",
        position: "topRight",
        color: "red",
      });
      return thunkAPI.rejectWithValue("Please fill in all fields");
    }
    try {
      const { data } = await axios.post("/contacts", user);

      return data;
    } catch (error) {
      iziToast.show({
        title: "Error",
        message: "Something went wrong",
        position: "topRight",
        color: "red",
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);

    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
