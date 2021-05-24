import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//Consts
import { API_URL } from "../consts";

export const signIn = createAsyncThunk(
  "auth/signin",
  async ({ email, password }, { dispatch }) => {
    const data = await axios
      .post(API_URL + "auth/signin", { email, password })
      .then((res) => res.data);
    console.log(data);
    return data;
  }
);
