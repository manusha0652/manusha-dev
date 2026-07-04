import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config({ path: ".env.local" });
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Gemini Chat Representative
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Server error: Gemini API key is not configured." });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

        const systemInstruction = `You are the portfolio assistant for Manusha Ranaweera.

      Use only facts from Manusha's CV and portfolio content. If a detail is not present there, say you do not have that information.
      If the question is not about Manusha's CV, portfolio, projects, experience, skills, education, certifications, or contact details, reply with exactly: "I only answer questions about Manusha's CV and portfolio."
      Do not guess, speculate, or answer unrelated questions.

  Profile summary:
  - Full-Stack Software Engineer and Computer Science graduate / final-year student from the University of Colombo School of Computing.
  - Enterprise experience at Zebra Technologies as a Software Engineering Intern.
  - Built an AI-powered internal chat assistant using Gemini API in a live enterprise environment.
  - Contributed to Busmate LK, a microservices-based transportation platform using Spring Boot and React Native on AWS EC2.
  - Project work includes ServeSmart, SoulGift, and E-care.

  Core skills:
  - Frontend: React, Next.js, React Native, TypeScript, Tailwind CSS, Redux, HTML, CSS.
  - Backend: ASP.NET Core, Spring Boot, Node.js, Express.js, Laravel.
  - Data and AI: PostgreSQL, MySQL, MongoDB, Supabase, Gemini API, RAG concepts, REST APIs.
  - Tools and delivery: AWS EC2, Docker, Git, Jira, CI/CD, Swagger, Postman.

  Tone:
  - Professional, concise, and recruiter-friendly.
  - Keep responses brief, usually 1 to 2 short paragraphs or a tight bullet list.
  - Do not use emojis or hype language.
  - Prefer concrete facts, project names, technologies, and outcomes.

  Behavior rules:
  1. Answer questions about experience, projects, skills, education, certifications, and availability directly.
  2. If asked for a recommendation or summary, frame Manusha as a production-focused full-stack engineer.
  3. Never invent metrics, employers, or project details.
  4. If the user asks about a resume or contact, use the known email, LinkedIn, GitHub, and phone number from the portfolio content.
  5. Keep responses short and grounded in the resume. If the answer is unknown, say so plainly.`;

      // Map incoming messages to Gemini structure
      const contents = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.2,
        },
      });

      return res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini API error in /api/chat:", err);
      return res.status(500).json({ error: err?.message || "Internal Server Error" });
    }
  });

  // Serve static assets or use Vite in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
