import axios from "axios";
import { API_URL } from "../consts";

export const getAllPhotos = (req, res) => {
  const { offset, limit } = req.query;
  console.log(req);
  const page = offset / 10 + 1;
  console.log(offset, limit);

  axios
    .get(`${API_URL}/photos?_page=${page}`)
    .then((data) => res.json({ photos: data.data }))
    .catch((err) => console.log(err));
};
