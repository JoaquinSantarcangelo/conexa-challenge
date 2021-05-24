import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";

export const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "post",
  initialState: initialState,
  extraReducers: {
    [AuthService.login.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      localStorage.setItem("user", state.user);
    },
    [AuthService.login.rejected]: (state, action) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
