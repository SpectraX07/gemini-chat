import "dotenv/config";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import routes from './routes/indexRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve static files like CSS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

// Routes
app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
