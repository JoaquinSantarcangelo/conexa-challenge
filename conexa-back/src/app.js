import express from "express";
import morgan from "morgan";

//Routes
import postsRoutes from "./routes/posts.routes";

const app = express();

//Middelwares
app.use(morgan("dev"));

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/posts", postsRoutes);

export default app;
