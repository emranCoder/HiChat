import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/chat/allmess/${id}`
    );
    return response.data.chats.message;
  }
);

const messSlice = createSlice({
  name: "message",
  initialState: {
    isLoading: false,
    mess: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.mess = action.payload;
    });
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.isLoading = false;
      state.mess = null;
      state.error = action.error.message;
    });
  },
});
export default messSlice.reducer;
