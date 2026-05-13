"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";

/* Holographic floating code elements */
function HolographicElements() {
  const elements = [
    { text: "</>", x: 10, y: 15, size: "1.2rem" },
    { text: "{ }", x: 85, y: 25, size: "1rem" },
    { text: "fn()", x: 20, y: 80, size: "0.9rem" },
    { text: "0x1A", x: 75, y: 75, size: "0.8rem" },
    { text: "λ", x: 45, y: 10, size: "1.4rem" },
    { text: "::AI", x: 60, y: 90, size: "0.9rem" },
    { text: ">>", x: 5, y: 50, size: "1.1rem" },
    { text: "01", x: 90, y: 55, size: "0.8rem" },
  ];

  return (
    <>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          className="font-mono"
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: el.size,
            color: i % 2 === 0 ? "#00d4ff" : "#a855f7",
            textShadow: `0 0 10px ${
              i % 2 === 0
                ? "rgba(0, 212, 255, 0.5)"
                : "rgba(168, 85, 247, 0.5)"
            }`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          {el.text}
        </motion.span>
      ))}
    </>
  );
}

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: (typeof skills)[0];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        padding: "28px 24px",
        background: isHovered
          ? "linear-gradient(135deg, rgba(15, 10, 40, 0.8), rgba(5, 2, 20, 0.6))"
          : "linear-gradient(135deg, rgba(15, 10, 40, 0.5), rgba(5, 2, 20, 0.3))",
        border: isHovered
          ? "1px solid rgba(0, 212, 255, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: 20,
        cursor: "default",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "none",
        boxShadow: isHovered
          ? "0 0 30px rgba(0, 212, 255, 0.15), 0 20px 40px rgba(0, 0, 0, 0.3)"
          : "none",
        backdropFilter: "blur(20px)",
        overflow: "hidden",
      }}
    >
      {/* Glow overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: isHovered
            ? "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)"
            : "transparent",
          transition: "all 0.4s",
        }}
      />

      {/* Icon */}
      <motion.div
        animate={isHovered ? { scale: 1.2, y: -4 } : { scale: 1, y: 0 }}
        style={{
          fontSize: "2rem",
          marginBottom: 16,
          filter: isHovered
            ? "drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))"
            : "none",
          transition: "filter 0.3s",
        }}
      >
        {skill.icon}
      </motion.div>

      {/* Name */}
      <h3
        style={{
          fontSize: "0.95rem",
          fontWeight: 600,
          marginBottom: 4,
          color: isHovered ? "#fff" : "rgba(255, 255, 255, 0.9)",
          transition: "color 0.3s",
        }}
      >
        {skill.name}
      </h3>

      {/* Category */}
      <span
        className="font-mono"
        style={{
          fontSize: "0.65rem",
          color: isHovered ? "#00d4ff" : "var(--text-secondary)",
          letterSpacing: "0.05em",
          transition: "color 0.3s",
        }}
      >
        {skill.category}
      </span>

      {/* Progress Bar */}
      <div
        style={{
          marginTop: 16,
          width: "100%",
          height: 3,
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: 0.5 + index * 0.08, duration: 1, ease: "easeOut" }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #00d4ff, #a855f7)",
            borderRadius: 2,
            boxShadow: isHovered
              ? "0 0 10px rgba(0, 212, 255, 0.5)"
              : "none",
            transition: "box-shadow 0.3s",
          }}
        />
      </div>

      {/* Level */}
      <div
        className="font-mono"
        style={{
          marginTop: 8,
          fontSize: "0.65rem",
          color: isHovered ? "#00d4ff" : "rgba(255, 255, 255, 0.3)",
          textAlign: "right",
          transition: "color 0.3s",
        }}
      >
        {skill.level}%
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(0, 212, 255, 0.04), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Cyberpunk Portrait as background side visual */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="skills-bg-image"
        style={{
          position: "absolute",
          left: -80,
          top: "50%",
          transform: "translateY(-50%)",
          width: "420px",
          height: "560px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Cyberpunk image with gradient mask */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "0 30px 30px 0",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/portrait-cyberpunk.jpg"
            alt="Mageshwaran M - Cyberpunk"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              opacity: 0.3,
            }}
          />
          {/* Heavy gradient mask fading right */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(3, 0, 20, 0.3) 0%, rgba(3, 0, 20, 0.6) 40%, rgba(3, 0, 20, 0.95) 80%, rgba(3, 0, 20, 1) 100%)",
              pointerEvents: "none",
            }}
          />
          {/* Top/bottom gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(3, 0, 20, 0.8) 0%, transparent 20%, transparent 80%, rgba(3, 0, 20, 0.8) 100%)",
              pointerEvents: "none",
            }}
          />
          {/* Holographic overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(0, 212, 255, 0.03), rgba(168, 85, 247, 0.03))",
              mixBlendMode: "overlay",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Holographic code elements */}
        <HolographicElements />
      </motion.div>

      <div className="section" ref={ref} style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 60, textAlign: "center" }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: "0.8rem",
              color: "#a855f7",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {"// SKILLS & EXPERTISE"}
          </span>
          <h2 className="section-title gradient-text" style={{ marginTop: 12 }}>
            Tech Arsenal
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 20,
          }}
        >
          {skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
