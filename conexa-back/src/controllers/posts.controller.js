import axios from "axios";
import { API_URL } from "../consts";

export const getAllPosts = (req, res) => {
  axios
    .get(`${API_URL}/posts`)
    .then((data) => res.json({ posts: data.data }))
    .catch((err) => console.log(err));
};
