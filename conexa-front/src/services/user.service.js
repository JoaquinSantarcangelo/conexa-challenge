import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import authHeader from "./auth.header";

//Consts
import { API_URL } from "../consts";

export const getPosts = () => {
  return createAsyncThunk(
    "post/getPosts",
    async () => await axios.get(API_URL + "posts", { headers: authHeader() })
  );
};

export const getPhotos = () => {
  return createAsyncThunk(
    "post/getPosts",
    async () => await axios.get(API_URL + "photos", { headers: authHeader() })
  );
};

export const fetchPosts = createAsyncThunk(
  "´post/fetchPosts",
  async (_, { dispatch }) => {
    const data = await axios
      .get(API_URL + "posts", { headers: authHeader() })
      .then((res) => res.data);
    return data;
  }
);
