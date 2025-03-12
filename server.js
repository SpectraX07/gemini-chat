import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import routes from './src/routes/indexRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) return res.status(400).json({ success: false, error: "Message is required" });

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(message);
        const responseText = result.response?.candidates[0]?.content?.parts[0]?.text || "No response available";

        res.json({
            success: true,
            request: message,
            reply: responseText,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, error: "Something went wrong" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
