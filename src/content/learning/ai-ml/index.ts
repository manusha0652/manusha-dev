import { LearningTopic } from "../../../types";

export const topic: LearningTopic = {
  slug: "ai-ml",
  title: "AI / ML",
  subtitle: "Shipping agent-based AI products and going deeper into model workflows.",
  description:
    "I've already shipped two AI-integrated products — a Gemini-powered assistant in production during my internship and Ferris the Librarian, an offline RAG assistant I built end to end. This page tracks where I'm taking that further.",
  currentFocus: ["Agentic AI tools", "RAG architecture", "LangChain", "Model evaluation"],
  whatImDoing: [
    "Building on production experience with the Gemini LLM API from my software engineering internship.",
    "Shipped Ferris the Librarian, a privacy-first offline RAG assistant using LangChain, Ollama, Llama 3, and ChromaDB with a hallucination-resistant retrieval pipeline.",
    "Going deeper into agent orchestration and evaluation so AI features hold up outside of demos.",
  ],
  nextSteps: ["Multi-step agent orchestration", "Evaluation frameworks", "Fine-tuning basics", "Production RAG hardening"],
  iconKey: "brain",
};
