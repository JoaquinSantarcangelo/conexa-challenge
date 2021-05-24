import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../../services/auth.service";

export const initialState = {
  token: null,
  loggedIn: false,
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "post",
  initialState: initialState,
  extraReducers: {
    [signIn.pending]: (state, action) => {
      state.loading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.loggedIn = true;
      state.loading = false;
      localStorage.setItem("token", state.token);
    },
    [signIn.rejected]: (state, action) => {
      state.user = null;
      state.loggedIn = false;
      state.loading = false;
      state.error = "Invalid credentials"
    },
  },
});

export default userSlice.reducer;
