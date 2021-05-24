import { Router } from "express";
const router = Router();

//Controller
import { getAllPosts } from "../controllers/posts.controller";

//Middelwares
import { verifyToken } from "../middlewares/authJwt";

//Routes
// router.get("/", verifyToken, getAllPosts);
router.get("/:page", getAllPosts);

export default router;
