import { Router } from "express";
const router = Router();

//Controller
import { getAllPosts } from "../controllers/posts.controller";

//Routes
router.get("/", getAllPosts);

export default router;
