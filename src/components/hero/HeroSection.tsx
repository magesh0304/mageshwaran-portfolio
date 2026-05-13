"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const roles = personalInfo.roles;

function TypingEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span>
      {roles[roleIndex].substring(0, charIndex)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        style={{ color: "#00d4ff" }}
      >
        |
      </motion.span>
    </span>
  );
}

function FloatingCode() {
  const snippets = [
    { code: "const ai = await model.predict(data);", left: "5%", top: "20%" },
    { code: "function buildFuture() { return <Innovation /> }", left: "60%", top: "15%" },
    { code: "npm run create:amazing", left: "25%", top: "55%" },
    { code: "git commit -m 'Pushed to production 🚀'", left: "65%", top: "70%" },
    { code: "SELECT * FROM skills WHERE level > 90;", left: "10%", top: "75%" },
    { code: "import { success } from 'hard-work';", left: "50%", top: "85%" },
  ];

  return (
    <>
      {snippets.map((item, i) => (
        <motion.div
          key={i}
          className="font-mono floating-code"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.12, 0.12, 0],
            y: [0, -30],
          }}
          transition={{
            duration: 8,
            delay: i * 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            fontSize: "0.7rem",
            color: "#00d4ff",
            whiteSpace: "nowrap",
            left: item.left,
            top: item.top,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {item.code}
        </motion.div>
      ))}
    </>
  );
}

/* Floating energy particles around portrait — deterministic to avoid hydration mismatch */
const ENERGY_PARTICLES = [
  { id: 0, size: 4, x: 12, y: 8, delay: 0, duration: 5, dir: 15 },
  { id: 1, size: 3, x: 85, y: 22, delay: 1.2, duration: 6, dir: -15 },
  { id: 2, size: 5, x: 45, y: 90, delay: 0.5, duration: 4.5, dir: 15 },
  { id: 3, size: 2, x: 70, y: 15, delay: 2.0, duration: 7, dir: -15 },
  { id: 4, size: 4, x: 25, y: 65, delay: 3.1, duration: 5.5, dir: 15 },
  { id: 5, size: 3, x: 92, y: 50, delay: 0.8, duration: 6.5, dir: -15 },
  { id: 6, size: 5, x: 55, y: 35, delay: 1.5, duration: 4, dir: 15 },
  { id: 7, size: 2, x: 8, y: 78, delay: 2.8, duration: 5, dir: -15 },
  { id: 8, size: 3, x: 38, y: 5, delay: 3.5, duration: 6, dir: 15 },
  { id: 9, size: 4, x: 78, y: 88, delay: 0.3, duration: 7, dir: -15 },
  { id: 10, size: 2, x: 60, y: 42, delay: 1.8, duration: 4.5, dir: 15 },
  { id: 11, size: 5, x: 15, y: 55, delay: 2.5, duration: 5.5, dir: -15 },
];

function EnergyParticles() {
  return (
    <>
      {ENERGY_PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -30, 0],
            x: [0, p.dir, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background:
              p.id % 3 === 0
                ? "#00d4ff"
                : p.id % 3 === 1
                ? "#a855f7"
                : "#06ffd2",
            boxShadow: `0 0 ${p.size * 3}px ${
              p.id % 3 === 0
                ? "rgba(0, 212, 255, 0.6)"
                : p.id % 3 === 1
                ? "rgba(168, 85, 247, 0.6)"
                : "rgba(6, 255, 210, 0.6)"
            }`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            pointerEvents: "none",
            zIndex: 5,
          }}
        />
      ))}
    </>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />

      {/* Gradient Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(0, 212, 255, 0.08), transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(168, 85, 247, 0.06), transparent 50%), linear-gradient(180deg, rgba(3, 0, 20, 0.3), rgba(3, 0, 20, 0.9))",
          pointerEvents: "none",
        }}
      />

      <FloatingCode />

      <div
        className="section hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Content */}
        <div>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="hero-status-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              background: "rgba(0, 212, 255, 0.08)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              borderRadius: 100,
              marginBottom: 28,
              fontSize: "0.8rem",
              color: "#00d4ff",
              letterSpacing: "0.05em",
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#06ffd2",
                boxShadow: "0 0 10px #06ffd2",
              }}
            />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-orbitron"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: "0.02em",
            }}
          >
            <span style={{ color: "rgba(255, 255, 255, 0.95)" }}>Hi, I&apos;m</span>
            <br />
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="font-mono"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: 12,
              minHeight: "2em",
            }}
          >
            <TypingEffect />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: 480,
              marginBottom: 40,
            }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="hero-cta-buttons"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <span>→</span>
            </a>
            <a href={personalInfo.resumeUrl} className="btn-secondary">
              ↓ Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              💼 Hire Me
            </a>
          </motion.div>

          {/* Tech Stack Quick View */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="hero-tech-stack"
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(255, 255, 255, 0.3)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Tech Stack
            </span>
            <div
              style={{
                width: 30,
                height: 1,
                background: "rgba(255, 255, 255, 0.1)",
              }}
            />
            <div style={{ display: "flex", gap: 8 }}>
              {["Python", "JS", "React", "AI"].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{
                    padding: "4px 12px",
                    fontSize: "0.7rem",
                    color: "rgba(0, 212, 255, 0.7)",
                    background: "rgba(0, 212, 255, 0.05)",
                    border: "1px solid rgba(0, 212, 255, 0.15)",
                    borderRadius: 6,
                    cursor: "default",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right - Anti-Gravity Floating Hero Portrait */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="hero-portrait"
          style={{
            position: "relative",
            height: "580px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -3}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* Outer Neon Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="portrait-ring-outer"
            style={{
              position: "absolute",
              width: "480px",
              height: "480px",
              borderRadius: "50%",
              border: "2px solid rgba(0, 212, 255, 0.12)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow:
                "0 0 40px rgba(0, 212, 255, 0.08), inset 0 0 40px rgba(0, 212, 255, 0.04)",
              zIndex: 1,
            }}
          >
            {/* Orbiting dot */}
            <div
              style={{
                position: "absolute",
                top: -5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#00d4ff",
                boxShadow: "0 0 15px #00d4ff, 0 0 30px rgba(0, 212, 255, 0.5)",
              }}
            />
          </motion.div>

          {/* Inner Neon Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="portrait-ring-inner"
            style={{
              position: "absolute",
              width: "440px",
              height: "440px",
              borderRadius: "50%",
              border: "1px solid rgba(168, 85, 247, 0.15)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 25px rgba(168, 85, 247, 0.06)",
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -4,
                left: "50%",
                transform: "translateX(-50%)",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#a855f7",
                boxShadow: "0 0 12px #a855f7",
              }}
            />
          </motion.div>

          {/* Neon glow backdrop */}
          <div
            className="portrait-glow-bg"
            style={{
              position: "absolute",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              filter: "blur(30px)",
              zIndex: 0,
              animation: "energyPulse 4s ease-in-out infinite",
            }}
          />

          {/* Energy Particles */}
          <EnergyParticles />

          {/* Main Portrait Image */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="portrait-image-wrapper"
            style={{
              position: "relative",
              width: "380px",
              height: "480px",
              borderRadius: "24px",
              overflow: "hidden",
              zIndex: 3,
              border: "1px solid rgba(0, 212, 255, 0.2)",
              boxShadow:
                "0 0 40px rgba(0, 212, 255, 0.15), 0 0 80px rgba(168, 85, 247, 0.08), 0 20px 60px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src="/images/portrait-hero.jpg"
              alt="Mageshwaran M - AI Developer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
            {/* Scanline effect */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.02) 2px, rgba(0, 212, 255, 0.02) 4px)",
                pointerEvents: "none",
                zIndex: 4,
              }}
            />
            {/* Bottom gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background:
                  "linear-gradient(180deg, transparent, rgba(3, 0, 20, 0.8))",
                pointerEvents: "none",
                zIndex: 4,
              }}
            />
            {/* Neon edge glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "24px",
                boxShadow:
                  "inset 0 0 30px rgba(0, 212, 255, 0.1), inset 0 0 60px rgba(168, 85, 247, 0.05)",
                pointerEvents: "none",
                zIndex: 5,
              }}
            />
          </motion.div>

          {/* Floating Status Tags */}
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="portrait-tag-left"
            style={{
              position: "absolute",
              bottom: "15%",
              left: "-5%",
              padding: "10px 18px",
              background: "rgba(3, 0, 20, 0.8)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              borderRadius: 12,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: "0.7rem", color: "#06ffd2" }}>⚡</span>
            <span
              className="font-mono"
              style={{ fontSize: "0.7rem", color: "#00d4ff", letterSpacing: "0.05em" }}
            >
              Full Stack Developer
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0], x: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="portrait-tag-right"
            style={{
              position: "absolute",
              top: "12%",
              right: "-8%",
              padding: "10px 18px",
              background: "rgba(3, 0, 20, 0.8)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              borderRadius: 12,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: "0.7rem", color: "#a855f7" }}>🧠</span>
            <span
              className="font-mono"
              style={{ fontSize: "0.7rem", color: "#a855f7", letterSpacing: "0.05em" }}
            >
              AI Enthusiast
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="scroll-indicator"
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            color: "rgba(255, 255, 255, 0.3)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 20,
            height: 32,
            borderRadius: 12,
            border: "1.5px solid rgba(255, 255, 255, 0.15)",
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 3,
              height: 8,
              borderRadius: 2,
              background: "rgba(0, 212, 255, 0.5)",
            }}
          />
        </motion.div>
      </motion.div>


    </section>
  );
}
