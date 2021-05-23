import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//Consts
import { API_URL } from "../consts";

class UserService {
  getPosts() {
    return createAsyncThunk(
      "post/getPosts",
      async () => await axios.get(API_URL + "posts")
    );
  }

  getPhotos() {
    return createAsyncThunk(
      "post/getPosts",
      async () => await axios.get(API_URL + "photos")
    );
  }
}

export default new UserService();
