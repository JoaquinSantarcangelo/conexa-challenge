import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../../services/auth.service";

export const initialState = {
  user: null,
  loggedIn: false,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "post",
  initialState: initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      localStorage.setItem("user", state.user);
    },
    [signIn.rejected]: (state, action) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
