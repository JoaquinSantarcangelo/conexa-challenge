import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../services/user.service";

export const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      console.log("Get pending", action);
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      console.log("Get post fullfilled", action);
      state.posts = action.payload.posts;
      state.loading = false;
    },
    [fetchPosts.rejected]: (state, action) => {
      console.log("Get post rejected", action);
      state.posts = [];
      state.loading = false;
      state.error = "No se pudo conseguir el recurso solicitado";
    },
  },
});

export default postSlice.reducer;
