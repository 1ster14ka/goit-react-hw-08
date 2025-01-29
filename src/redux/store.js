import { configureStore } from "@reduxjs/toolkit";
// import { contactReducer } from "./contactsSlice";
// import { filterReducer } from "./filtersSlice";
import { contactReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filters/filtersSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authSlice,
  },
});
