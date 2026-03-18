"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! 👋 I'm Trung's AI assistant. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages
            .filter((m) => m.id !== "welcome")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const assistantId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: m.content + chunk }
                : m
            )
          );
        }
      }
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent-primary text-white shadow-lg shadow-accent-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/30 hover:scale-105 ${
          isOpen ? "hidden" : ""
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-secondary" />
        </span>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-120px)] flex flex-col glass rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-lg bg-accent-primary/10 text-accent-primary">
                  <Bot size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    AI Assistant
                  </p>
                  <p className="text-[10px] text-accent-secondary font-mono">
                    Ask me about Trung
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-white/[0.03]"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`shrink-0 p-1 rounded-md mt-0.5 ${
                      msg.role === "user"
                        ? "bg-accent-primary/10 text-accent-primary"
                        : "bg-accent-secondary/10 text-accent-secondary"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User size={14} />
                    ) : (
                      <Bot size={14} />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "chat-message-user text-text-primary"
                        : "chat-message-ai text-text-secondary"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.content === "" && (
                <div className="flex gap-2.5">
                  <div className="shrink-0 p-1 rounded-md bg-accent-secondary/10 text-accent-secondary">
                    <Bot size={14} />
                  </div>
                  <div className="chat-message-ai px-3.5 py-2.5">
                    <Loader2
                      size={14}
                      className="animate-spin text-text-muted"
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="px-3 py-2 text-xs text-accent-warm bg-accent-warm/5 rounded-lg border border-accent-warm/20">
                  Failed to connect. Please check the API key in{" "}
                  <code className="font-mono">.env.local</code>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-border-subtle"
            >
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 px-3.5 py-2 text-sm bg-bg-primary/50 border border-border-subtle rounded-lg text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 rounded-lg bg-accent-primary text-white transition-all hover:bg-accent-primary/90 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
