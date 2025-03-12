import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); // ✅ Correct Initialization

export const chatWithGemini = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ success: false, error: "Message is required" });
    }

    res.setHeader("Content-Type", "text/plain"); // Stream response as plain text
    res.setHeader("Transfer-Encoding", "chunked");

    const responseStream = await ai.models.generateContentStream({
      model: "gemini-2.0-flash-001", // Faster response model
      contents: message,
    });

    // Stream each chunk of response as it is generated
    for await (const chunk of responseStream) {
      if (chunk.text) {
        res.write(chunk.text + " "); // Send chunk to client
      }
    }

    res.end(); // End the response when streaming is complete
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};
