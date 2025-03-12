import express from "express";
import { chatWithGemini } from "../controllers/api/chatController.js";

const router = express.Router();

router.post("/chat", chatWithGemini);

export default router;