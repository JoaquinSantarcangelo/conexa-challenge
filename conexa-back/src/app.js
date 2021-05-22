import express from "express";
import morgan from "morgan";
import cors from "cors";
require("dotenv").config();

//Routes Imports
import postsRoutes from "./routes/posts.routes";

const app = express();

//Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Middelwares
app.use(morgan("dev"));

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/posts", postsRoutes);

export default app;
