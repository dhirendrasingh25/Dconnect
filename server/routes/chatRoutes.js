import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} from "../controllers/chatController.js";

const chatRouter = express.Router();

chatRouter.post("/", protect, accessChat);
chatRouter.get("/", protect, fetchChats);

chatRouter.post("/group", protect, createGroupChat);
chatRouter.put("/group/rename", protect, renameGroup);
chatRouter.put("/group/remove", protect, removeFromGroup);
chatRouter.put("/group/add", protect, addToGroup);

export default chatRouter;
