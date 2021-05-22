import { Router } from "express";
const router = Router();

//Consts
import { GET_POST_PATH } from "../consts";

router.get("/", (req, res) => res.json("Get posts"));

export default router;
