import { createSlice } from "@reduxjs/toolkit";
import UserService from "../../services/user.service";

export const initialState = {
  photos: [],
  loading: false,
  error: null,
};

export const photoSlice = createSlice({
  name: "photo",
  initialState: initialState,
  extraReducers: {
    [UserService.getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload.data;
    },
    [UserService.getPhotos.rejected]: (state, action) => {
      state.photos = [];
    },
  },
});

export default photoSlice.reducer;
