import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./database";

//Routes Imports
import postsRoutes from "./routes/posts.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

//Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Middelwares
app.use(morgan("dev"));

//Routes

app.use("/api/posts", postsRoutes);
app.use("/api/auth", authRoutes);

export default app;
