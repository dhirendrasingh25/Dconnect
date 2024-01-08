import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import express from "express";
import mongoose from "mongoose";

import { chats } from "./data/data.js";
import userRouter from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

dotenv.config();
const PORT = process.env.PORT || 4040;
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(express.json());

async function dbConnection() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database Connected");
}
dbConnection().catch((err) => console.log(err));

// app.use(notFound);
// app.use(errorHandler);

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
