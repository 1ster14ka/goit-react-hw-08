import { configureStore } from "@reduxjs/toolkit";
// import { contactReducer } from "./contactsSlice";
// import { filterReducer } from "./filtersSlice";
import { contactReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { authSlice } from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  version: 1,
  whitelist: ["token"],
  storage,
};
const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
