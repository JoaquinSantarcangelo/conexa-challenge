import { configureStore } from "@reduxjs/toolkit";

//Slices
import postSlice from "../features/post/postSlice";
import photoSlice from "../features/post/photoSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postSlice,
    photos: photoSlice,
  },
});
