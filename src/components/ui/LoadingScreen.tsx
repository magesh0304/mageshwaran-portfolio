"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootMessages = [
  "Initializing neural network...",
  "Loading AI modules...",
  "Calibrating visual cortex...",
  "Establishing secure connection...",
  "Rendering holographic interface...",
  "System ready.",
];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentMsg, setCurrentMsg] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const msgInterval = setInterval(() => {
      setCurrentMsg((prev) => {
        if (prev >= bootMessages.length - 1) {
          clearInterval(msgInterval);
          return bootMessages.length - 1;
        }
        return prev + 1;
      });
    }, 350);

    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearInterval(msgInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated Orb */}
          <motion.div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, #00d4ff, #a855f7, #030014)",
              boxShadow:
                "0 0 60px rgba(0, 212, 255, 0.4), 0 0 120px rgba(168, 85, 247, 0.2)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Title */}
          <motion.div
            style={{ textAlign: "center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2
              className="font-orbitron"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                marginBottom: 16,
                background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MAGESHWARAN.AI
            </h2>

            {/* Boot Messages */}
            <motion.p
              key={currentMsg}
              className="font-mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontSize: "0.75rem",
                color: "rgba(0, 212, 255, 0.6)",
                letterSpacing: "0.05em",
                height: 20,
              }}
            >
              {bootMessages[currentMsg]}
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <div style={{ width: 200, textAlign: "center" }}>
            <div className="loading-bar">
              <motion.div
                className="loading-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p
              className="font-mono"
              style={{
                fontSize: "0.7rem",
                color: "rgba(255, 255, 255, 0.3)",
                marginTop: 8,
              }}
            >
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
