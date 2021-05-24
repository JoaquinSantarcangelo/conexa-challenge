import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../../services/auth.service";

export const initialState = {
  token: localStorage.getItem("token") || null,
  loggedIn: localStorage.getItem("token") ? true : false,
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    signOut: (state) => {
      state.loggedIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signIn.pending]: (state, action) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.loggedIn = true;
      state.loading = false;
      localStorage.setItem("token", action.payload.token);
    },
    [signIn.rejected]: (state, action) => {
      state.user = null;
      state.loggedIn = false;
      state.loading = false;
      state.error = "Invalid credentials";
    },
  },
});

export const { signOut } = userSlice.actions


export default userSlice.reducer;
