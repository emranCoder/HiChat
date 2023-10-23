import { configureStore } from "@reduxjs/toolkit";
import chatsSlice from "./createSlice";
import messSlice from "./messSlice";

const store = configureStore({
  reducer: {
    chat: chatsSlice,
    mess: messSlice,
  },
});

export default store;
