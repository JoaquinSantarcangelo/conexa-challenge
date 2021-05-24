import { configureStore } from "@reduxjs/toolkit";

//Slices
import postSlice from "../features/post/postSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postSlice,
  },
});
