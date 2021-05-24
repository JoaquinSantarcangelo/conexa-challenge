import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import authHeader from "./auth.header";

//Consts
import { API_URL } from "../consts";

export const signIn = createAsyncThunk(
  "post/fetchPosts",
  async ({ email, password }, { dispatch }) => {
    const data = await axios
      .post(API_URL + "posts", { email, password }, { headers: authHeader() })
      .then((res) => res.data);
    console.log(data);
    return data;
  }
);
