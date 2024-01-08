import express from "express";
import {
  getAllUsers,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js";
import protect from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/allUsers", protect, getAllUsers);

export default userRouter;
