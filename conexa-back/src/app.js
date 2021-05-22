import express from "express";
import morgan from "morgan";

const app = express();

//Middelwares
app.use(morgan("dev"));

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
