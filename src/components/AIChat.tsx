import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage } from "../types";
import { Send, User, Bot, Sparkles, AlertCircle, Info } from "lucide-react";

const SUGGESTED_PROMPTS = [
  "Tell me about the Zebra Technologies internship.",
  "What did Manusha build with Gemini?",
  "What are the strongest projects in this portfolio?",
  "Is he open to full-time SWE roles?"
];

export default function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello. I answer only questions about Manusha Ranaweera's CV and portfolio. Ask me about his Zebra Technologies internship, the Gemini-powered internal chat assistant, the Busmate LK microservices project, or his skills and education.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when messages load/change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setError(null);
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Pass the historical chat structure along with the new message
      const historyToSend = [...messages, userMessage].map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyToSend })
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with the portfolio assistant.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Something went wrong while connecting to Gemini.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-24 px-6 lg:px-16 bg-[#0a0c14] border-b border-slate-900/60 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/2 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block">INTELLIGENT REPRESENTATIVE</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Ask CV-grounded questions only
          </h2>
          <p className="text-slate-400 font-sans font-light text-sm sm:text-base leading-relaxed">
            This assistant is restricted to verified CV and portfolio details so recruiters get consistent answers without speculation.
          </p>
        </div>

        {/* Chat UI Frame */}
        <div className="bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-145">
          
          {/* Header Panel */}
          <div className="px-6 py-4 bg-slate-900/40 border-b border-slate-900/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Sparkles className="h-4.5 w-4.5 text-blue-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">Portfolio Assistant</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  CV and portfolio only
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-mono">
              <Info className="h-3.5 w-3.5 text-slate-600" />
              Strict scope Q&A
            </div>
          </div>

          {/* Messages Body */}
          <div className="grow p-6 overflow-y-auto space-y-6 scrollbar-thin">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-4 max-w-4xl ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {/* Robot/System Avatar */}
                  {msg.role === "assistant" && (
                    <div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-slate-400" />
                    </div>
                  )}

                  <div className={`flex flex-col space-y-1.5 max-w-[85%] sm:max-w-[75%]`}>
                    <div
                      className={`px-4.5 py-3 rounded-2xl text-xs sm:text-sm font-light leading-relaxed ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white rounded-tr-sm"
                          : "bg-slate-900/60 border border-slate-800/40 text-slate-300 rounded-tl-sm"
                      }`}
                    >
                      {/* Convert lines to paragraphs for cleaner spacing */}
                      {msg.content.split("\n").map((line, idx) => (
                        <p key={idx} className={idx > 0 ? "mt-2" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>
                    <span className={`text-[10px] text-slate-600 font-mono ${msg.role === "user" ? "text-right" : "text-left"}`}>
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* User Avatar */}
                  {msg.role === "user" && (
                    <div className="h-8 w-8 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <User className="h-4 w-4 text-blue-400" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Loader */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-4"
                >
                  <div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-slate-400 animate-pulse" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="px-5 py-3 bg-slate-900/40 border border-slate-800/20 rounded-2xl rounded-tl-sm flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce delay-75"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce delay-150"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce delay-220"></span>
                      M-AI is thinking...
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error Block */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/30 flex items-start gap-3 text-xs text-rose-400 font-light"
                >
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold font-mono block mb-0.5">Connection Error</span>
                    {error}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions block */}
          {messages.length === 1 && (
            <div className="px-6 py-3 border-t border-slate-900/60 flex flex-wrap gap-2 bg-slate-900/25">
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mr-2 mt-2">Try asking:</span>
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-[11px] text-slate-400 hover:text-white transition-all font-sans font-light"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Text Input Footer Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="p-4 bg-slate-900/40 border-t border-slate-900/80 flex gap-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about projects, experience, or skills..."
              className="grow px-4 py-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 focus:border-blue-500 focus:outline-none transition-all text-xs sm:text-sm font-light text-white"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-slate-900 disabled:text-slate-600 hover:scale-[1.02] active:scale-95 transition-all text-white flex items-center justify-center shrink-0 cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
