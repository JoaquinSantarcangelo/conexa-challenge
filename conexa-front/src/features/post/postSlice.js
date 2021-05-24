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
    [UserService.getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
    },
    [UserService.getPosts.rejected]: (state, action) => {
      state.posts = [];
    },
  },
});

export default postSlice.reducer;
