import axios from "axios";
import { API_URL } from "../consts";

export const getAllPhotos = (req, res) => {
  axios
    .get(`${API_URL}/photos`)
    .then((data) => res.json({ photos: data.data }))
    .catch((err) => console.log(err));
};
