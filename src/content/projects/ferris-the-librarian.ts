import { Project } from "../../types";

export const project: Project = {
  id: "ferris-the-librarian",
  title: "Ferris the Librarian",
  subtitle: "Privacy-First Offline RAG Assistant",
  description: "An agent-based AI assistant that answers questions from a private document set entirely offline, using local LLMs and a hallucination-resistant retrieval pipeline.",
  problem: "Sending private documents to a third-party API is a non-starter for privacy-sensitive knowledge bases, and most off-the-shelf chat models still hallucinate answers instead of citing sources.",
  solution: "Built a fully offline retrieval-augmented generation pipeline on Ollama and Llama 3, with semantic chunking and vector search over ChromaDB so every answer stays grounded in the source documents.",
  oneHardThing: "Designed the retrieval and prompting pipeline to resist hallucination by forcing every response to trace back to retrieved source chunks, tuning chunking and ranking until answers stayed accurate with zero cloud API calls.",
  techStack: ["Python", "LangChain", "Ollama", "Llama 3", "ChromaDB", "Streamlit", "RAG Architecture"],
  tags: ["Agentic AI", "RAG", "Local LLM"],
  previewImage: "/projects/ferris-the-librarian.jpg",
  previewIconKey: "rag",
  previewAccent: "cyan",
  metrics: [
    "Fully offline retrieval-augmented pipeline",
    "Semantic chunking and vector search over ChromaDB",
    "Source-backed answers with no cloud API dependency"
  ],
  links: {
    github: "https://github.com/manusha0652",
  },
  designNotes: "A minimal Streamlit interface kept the focus on answer quality and traceability: every response surfaces its retrieved source chunks so the reasoning stays visible instead of hidden behind a black box."
};