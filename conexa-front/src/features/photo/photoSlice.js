import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../consts";
import { fetchPhotos } from "../../services/user.service";

export const initialState = {
  photos: [],
  loading: false,
  error: null,
};

export const photoSlice = createSlice({
  name: "photo",
  initialState: initialState,
  reducers: {},
  extraReducers: {},
  extraReducers: {
    [fetchPhotos.pending]: (state, action) => {
      console.log("Get pending", action);
      state.loading = true;
    },
    [fetchPhotos.fulfilled]: (state, action) => {
      console.log("Get post fullfilled", action);
      state.photos = action.payload.photos;
      state.loading = false;
    },
    [fetchPhotos.rejected]: (state, action) => {
      console.log("Get post rejected", action);
      state.photos = [];
      state.loading = false;
      state.error = "No se pudo conseguir el recurso solicitado";
    },
  },
});

export default photoSlice.reducer;
