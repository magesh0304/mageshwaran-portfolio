"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const quickReplies = [
  "Tell me about yourself",
  "What are your skills?",
  "Show me your projects",
  "How can I contact you?",
];

const botResponses: Record<string, string> = {
  "tell me about yourself":
    "I'm Mageshwaran M, a passionate MCA student at SRM Institute of Science and Technology. I specialize in full-stack web development and AI-powered solutions. I love building immersive digital experiences! 🚀",
  "what are your skills?":
    "I'm proficient in Python, Django, JavaScript, HTML, CSS, PHP, MySQL, and Git. I also have strong skills in AI Tools, Prompt Engineering, and design tools like Canva. Always learning more! ⚡",
  "show me your projects":
    "Check out my Movie Success Prediction System — an AI-powered project using Python, Django, and Machine Learning to predict box-office success! Scroll down to the Projects section to see it. 🎬",
  "how can i contact you?":
    "You can reach me via email, phone, LinkedIn, or WhatsApp! Scroll to the Contact section or click the links in the footer. I'm always open to new opportunities! 📧",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hey! 👋 I'm Mageshwaran's AI assistant. How can I help you learn more about him?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      const lower = text.trim().toLowerCase();
      const response =
        botResponses[lower] ||
        "That's a great question! Feel free to explore the portfolio or reach out directly through the contact section. I'm sure Mageshwaran would love to connect! 😊";

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: response, sender: "bot" },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isOpen
            ? "0 0 20px rgba(0, 212, 255, 0.3)"
            : [
                "0 0 20px rgba(0, 212, 255, 0.2)",
                "0 0 40px rgba(0, 212, 255, 0.4)",
                "0 0 20px rgba(0, 212, 255, 0.2)",
              ],
        }}
        transition={isOpen ? {} : { duration: 2, repeat: Infinity }}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00d4ff, #a855f7)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          zIndex: 1001,
          color: "#fff",
        }}
      >
        {isOpen ? "✕" : "🤖"}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: 96,
              right: 28,
              width: "min(380px, calc(100vw - 56px))",
              height: 480,
              background: "rgba(8, 4, 30, 0.95)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(0, 212, 255, 0.15)",
              borderRadius: 24,
              zIndex: 1001,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow:
                "0 0 40px rgba(0, 212, 255, 0.1), 0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "18px 22px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(168, 85, 247, 0.2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                }}
              >
                🤖
              </div>
              <div>
                <div
                  className="font-orbitron"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  AI Assistant
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "#06ffd2",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#06ffd2",
                      display: "inline-block",
                    }}
                  />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    alignSelf:
                      msg.sender === "user" ? "flex-end" : "flex-start",
                    maxWidth: "85%",
                    padding: "12px 16px",
                    borderRadius:
                      msg.sender === "user"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(168, 85, 247, 0.2))"
                        : "rgba(255, 255, 255, 0.04)",
                    border:
                      msg.sender === "user"
                        ? "1px solid rgba(0, 212, 255, 0.2)"
                        : "1px solid rgba(255, 255, 255, 0.05)",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    color:
                      msg.sender === "user"
                        ? "#fff"
                        : "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div
              style={{
                padding: "8px 18px",
                display: "flex",
                gap: 6,
                overflowX: "auto",
                borderTop: "1px solid rgba(255, 255, 255, 0.03)",
              }}
            >
              {quickReplies.map((reply) => (
                <motion.button
                  key={reply}
                  onClick={() => handleSend(reply)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "6px 14px",
                    fontSize: "0.68rem",
                    color: "#00d4ff",
                    background: "rgba(0, 212, 255, 0.06)",
                    border: "1px solid rgba(0, 212, 255, 0.15)",
                    borderRadius: 100,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontFamily: "'Inter', sans-serif",
                    transition: "all 0.2s",
                  }}
                >
                  {reply}
                </motion.button>
              ))}
            </div>

            {/* Input */}
            <div
              style={{
                padding: "14px 18px",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                display: "flex",
                gap: 10,
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  fontSize: "0.85rem",
                  color: "#fff",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: 12,
                  outline: "none",
                  fontFamily: "'Inter', sans-serif",
                }}
              />
              <motion.button
                onClick={() => handleSend(input)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, #00d4ff, #a855f7)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                ➤
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
