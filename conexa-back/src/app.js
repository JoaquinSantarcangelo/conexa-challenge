import express from "express";
import morgan from "morgan";

const app = express();

//Middelwares
app.use(morgan("dev"));

export default app;
