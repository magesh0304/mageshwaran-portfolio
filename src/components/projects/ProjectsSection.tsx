"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/portfolio";

/* Floating UI Cards around the developer image */
function FloatingUICards() {
  const cards = [
    { text: "React.js", icon: "⚛️", x: -20, y: 10, delay: 0 },
    { text: "Python", icon: "🐍", x: 75, y: 5, delay: 0.5 },
    { text: "AI / ML", icon: "🤖", x: 80, y: 65, delay: 1 },
    { text: "Database", icon: "🗄️", x: -15, y: 70, delay: 1.5 },
  ];

  return (
    <>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="projects-floating-cards"
          animate={{
            y: [0, -10, 0],
            x: [0, i % 2 === 0 ? 5 : -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: card.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${card.x}%`,
            top: `${card.y}%`,
            padding: "8px 14px",
            background: "rgba(3, 0, 20, 0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(0, 212, 255, 0.15)",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            gap: 6,
            zIndex: 10,
            boxShadow: "0 0 15px rgba(0, 212, 255, 0.08)",
          }}
        >
          <span style={{ fontSize: "0.8rem" }}>{card.icon}</span>
          <span
            className="font-mono"
            style={{
              fontSize: "0.65rem",
              color: "#00d4ff",
              letterSpacing: "0.05em",
            }}
          >
            {card.text}
          </span>
        </motion.div>
      ))}
    </>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(0, 212, 255, 0.05), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div className="section" ref={ref}>
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
              color: "#ff2daf",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {"// FEATURED WORK"}
          </span>
          <h2 className="section-title gradient-text" style={{ marginTop: 12 }}>
            Projects
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Showcasing my best work and creative solutions.
          </p>
        </motion.div>

        {/* Projects */}
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        marginBottom: 40,
        borderRadius: 24,
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(15, 10, 40, 0.7), rgba(5, 2, 20, 0.5))",
        border: isHovered
          ? "1px solid rgba(0, 212, 255, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: isHovered
          ? "0 0 40px rgba(0, 212, 255, 0.1), 0 30px 60px rgba(0, 0, 0, 0.4)"
          : "none",
        transform: isHovered ? "translateY(-4px)" : "none",
      }}
    >
      {/* Top Glow Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: isHovered
            ? "linear-gradient(90deg, transparent, #00d4ff, #a855f7, transparent)"
            : "transparent",
          transition: "all 0.5s",
        }}
      />

      <div
        className="projects-card-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
        }}
      >
        {/* Project Visual - Developer Image with laptop glow */}
        <div
          style={{
            position: "relative",
            minHeight: 400,
            background:
              "linear-gradient(135deg, rgba(0, 212, 255, 0.03), rgba(168, 85, 247, 0.03))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Developer Hoodie Image */}
          <motion.div
            animate={
              isHovered
                ? { scale: 1.05 }
                : { scale: 1 }
            }
            transition={{ duration: 0.6 }}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="/images/portrait-hoodie.jpg"
              alt="Mageshwaran M - Developer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />

            {/* Gradient overlays */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(3, 0, 20, 0.2), rgba(3, 0, 20, 0.1)), linear-gradient(180deg, transparent 50%, rgba(3, 0, 20, 0.7) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* Animated laptop glow effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "5%",
                left: "30%",
                width: "200px",
                height: "100px",
                background:
                  "radial-gradient(ellipse, rgba(0, 212, 255, 0.15), transparent 70%)",
                filter: "blur(20px)",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Floating UI Cards */}
          <FloatingUICards />

          {/* Featured Badge */}
          {project.featured && (
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                padding: "6px 14px",
                background: "rgba(0, 212, 255, 0.1)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                borderRadius: 100,
                fontSize: "0.7rem",
                color: "#00d4ff",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.08em",
                zIndex: 15,
                backdropFilter: "blur(8px)",
              }}
            >
              ⭐ Featured Project
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="projects-card-info" style={{ padding: "40px 44px" }}>
          <h3
            className="font-orbitron"
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              marginBottom: 16,
              letterSpacing: "0.03em",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(255, 255, 255, 0.6)",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            {project.description}
          </p>

          {/* Features */}
          <div style={{ marginBottom: 24 }}>
            <h4
              className="font-mono"
              style={{
                fontSize: "0.7rem",
                color: "#00d4ff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Key Features
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {project.features.map((feat, fi) => (
                <li
                  key={fi}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: "0.82rem",
                    color: "rgba(255, 255, 255, 0.55)",
                  }}
                >
                  <span style={{ color: "#06ffd2", fontSize: "0.5rem" }}>
                    ◆
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 28,
            }}
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono"
                style={{
                  padding: "5px 14px",
                  fontSize: "0.72rem",
                  color: "rgba(168, 85, 247, 0.8)",
                  background: "rgba(168, 85, 247, 0.08)",
                  border: "1px solid rgba(168, 85, 247, 0.15)",
                  borderRadius: 8,
                  letterSpacing: "0.03em",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: 12 }}>
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "10px 24px",
                background:
                  "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(168, 85, 247, 0.15))",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                borderRadius: 12,
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
              }}
            >
              🚀 Live Demo
            </motion.a>

            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "10px 24px",
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 12,
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.85rem",
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
              }}
            >
              ⟨/⟩ GitHub
            </motion.a>
          </div>
        </div>
      </div>


    </motion.div>
  );
}
