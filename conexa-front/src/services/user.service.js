import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import authHeader from "./auth.header";

//Consts
import { API_URL } from "../consts";

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (_, { dispatch }) => {
    const data = await axios
      .get(API_URL + "posts", { headers: authHeader() })
      .then((res) => res.data);
    return data;
  }
);

export const fetchPhotos = createAsyncThunk(
  "photo/fetchPhotos",
  async (offset, { dispatch }) => {
    console.log(offset);
    const query = `?offset=${offset}&limit=10`;
    const data = await axios
      .get(API_URL + "photos" + query, { headers: authHeader() })
      .then((res) => res.data);
    return data;
  }
);
