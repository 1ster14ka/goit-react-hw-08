import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })

      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          deleteContact.rejected,
          addContact.rejected,
          fetchContacts.rejected
        ),
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      );
  },
});

export const contactReducer = slice.reducer;
export const { addContacts, deleteContacts } = slice.actions;
