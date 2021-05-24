import { createSlice } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";

export const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  extraReducers: {
    [UserService.getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [UserService.getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
      state.loading = false;
    },
    [UserService.getPosts.rejected]: (state, action) => {
      state.posts = [];
      state.loading = false;
      state.error = "No se pudo conseguir el recurso solicitado";
    },
  },
});

export default postSlice.reducer;
