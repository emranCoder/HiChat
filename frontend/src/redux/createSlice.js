import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getCookie from "../utility/cookie";

const token = getCookie("auth");

export const fetchChats = createAsyncThunk("chats/fetchChats", async () => {
  const response = await axios.get("http://localhost:5000/api/chat/allchats/", {
    headers: {
      token: token,
    },
  });
  return response.data.data;
});

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    isLoading: false,
    chats: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChats.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchChats.fulfilled, (state, action) => {
      state.isLoading = false;
      state.chats = action.payload;
    });
    builder.addCase(fetchChats.rejected, (state, action) => {
      state.isLoading = false;
      state.chats = [];
      state.error = action.error.message;
    });
  },
});
export default chatsSlice.reducer;
