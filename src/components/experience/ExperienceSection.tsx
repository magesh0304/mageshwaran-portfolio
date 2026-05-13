"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 10% 60%, rgba(168, 85, 247, 0.04), transparent 50%)",
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
              color: "#06ffd2",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {"// EXPERIENCE"}
          </span>
          <h2 className="section-title gradient-text" style={{ marginTop: 12 }}>
            Career Timeline
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            My professional journey and milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          className="experience-timeline"
          style={{
            position: "relative",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="experience-timeline-line"
            style={{
              position: "absolute",
              left: 30,
              top: 0,
              width: 2,
              background:
                "linear-gradient(180deg, #00d4ff, #a855f7, transparent)",
              borderRadius: 1,
            }}
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
              className="experience-timeline-item"
              style={{
                position: "relative",
                paddingLeft: 80,
                paddingBottom: 40,
              }}
            >
              {/* Timeline Dot */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(0, 212, 255, 0.3)",
                    "0 0 25px rgba(0, 212, 255, 0.6)",
                    "0 0 10px rgba(0, 212, 255, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="experience-timeline-dot"
                style={{
                  position: "absolute",
                  left: 22,
                  top: 8,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                  border: "3px solid var(--deep-bg)",
                  zIndex: 2,
                }}
              />

              {/* Experience Card */}
              <div
                className="glass-card experience-card"
                style={{ padding: "32px 36px" }}
              >
                {/* Period Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    padding: "4px 14px",
                    background: "rgba(0, 212, 255, 0.08)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    borderRadius: 100,
                    fontSize: "0.75rem",
                    color: "#00d4ff",
                    marginBottom: 16,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.05em",
                  }}
                >
                  {exp.period}
                </div>

                <h3
                  className="font-orbitron"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: 4,
                    letterSpacing: "0.03em",
                  }}
                >
                  {exp.role}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#a855f7",
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  {exp.company}
                </p>

                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    marginBottom: 20,
                  }}
                >
                  📍 {exp.location}
                </p>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.65)",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {exp.responsibilities.map((resp, ri) => (
                    <motion.li
                      key={ri}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + ri * 0.1 }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: "0.85rem",
                        color: "rgba(255, 255, 255, 0.6)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          color: "#00d4ff",
                          fontSize: "0.6rem",
                          marginTop: 6,
                          flexShrink: 0,
                        }}
                      >
                        ▹
                      </span>
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
