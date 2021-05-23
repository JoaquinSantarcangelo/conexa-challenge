import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import authHeader from "./auth.header";

//Consts
import { API_URL } from "../consts";

class UserService {
  getPosts() {
    return createAsyncThunk(
      "post/getPosts",
      async () => await axios.get(API_URL + "posts", { headers: authHeader() })
    );
  }

  getPhotos() {
    return createAsyncThunk(
      "post/getPosts",
      async () => await axios.get(API_URL + "photos", { headers: authHeader() })
    );
  }
}

export default new UserService();
