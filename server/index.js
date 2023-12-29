import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import express from "express";
import mongoose from "mongoose";

const PORT = process.env.PORT || 4040;
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
