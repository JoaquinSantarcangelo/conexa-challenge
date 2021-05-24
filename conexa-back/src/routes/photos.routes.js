import { Router } from "express";
const router = Router();

//Controller
import { getAllPhotos } from "../controllers/photos.controller";

//Middelwares
import { verifyToken } from "../middlewares/authJwt";

//Routes
router.get("/", verifyToken, getAllPhotos);
// router.get("/", getAllPhotos);

export default router;
