"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutData } from "@/data/portfolio";

/* Rotating AI Particles around the portrait */
function RotatingParticles() {
  const particles = [
    { angle: 0, radius: 170, size: 6, color: "#00d4ff", speed: 10 },
    { angle: 60, radius: 180, size: 4, color: "#a855f7", speed: 14 },
    { angle: 120, radius: 160, size: 5, color: "#06ffd2", speed: 12 },
    { angle: 180, radius: 175, size: 3, color: "#00d4ff", speed: 16 },
    { angle: 240, radius: 165, size: 5, color: "#a855f7", speed: 11 },
    { angle: 300, radius: 185, size: 4, color: "#06ffd2", speed: 13 },
    { angle: 45, radius: 195, size: 3, color: "#ff2daf", speed: 18 },
    { angle: 135, radius: 150, size: 5, color: "#00d4ff", speed: 9 },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{
            duration: p.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: p.radius * 2,
            height: p.radius * 2,
            top: "50%",
            left: "50%",
            marginTop: -p.radius,
            marginLeft: -p.radius,
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(168, 85, 247, 0.04), transparent 50%)",
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
              color: "#00d4ff",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {"// ABOUT ME"}
          </span>
          <h2 className="section-title gradient-text" style={{ marginTop: 12 }}>
            Who I Am
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A glimpse into my journey, passion, and purpose.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Left - Glassmorphism Portrait Card with AI Particles */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            {/* Portrait with Glass Card and Rotating Particles */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "visible",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "30px 0",
              }}
            >
              {/* Rotating AI Particles */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                }}
              >
                <RotatingParticles />
              </div>

              {/* Glassmorphism Card with Portrait */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 380,
                  borderRadius: 20,
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(15, 10, 40, 0.7), rgba(5, 2, 20, 0.5))",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                  boxShadow:
                    "0 0 40px rgba(0, 212, 255, 0.1), 0 0 80px rgba(168, 85, 247, 0.05), 0 25px 50px rgba(0, 0, 0, 0.4)",
                  animation: "borderGlowPulse 4s ease-in-out infinite",
                  zIndex: 2,
                }}
              >
                {/* Blue Lighting Overlay on top */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background:
                      "linear-gradient(90deg, transparent, #00d4ff, #a855f7, transparent)",
                    zIndex: 5,
                  }}
                />

                <img
                  src="/images/portrait-professional.jpg"
                  alt="Mageshwaran M - Professional Portrait"
                  style={{
                    width: "100%",
                    height: 380,
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />

                {/* Soft blue lighting gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0, 212, 255, 0.05) 0%, transparent 30%, transparent 60%, rgba(3, 0, 20, 0.85) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Inner glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxShadow:
                      "inset 0 0 40px rgba(0, 212, 255, 0.08), inset 0 0 80px rgba(168, 85, 247, 0.04)",
                    pointerEvents: "none",
                    zIndex: 3,
                  }}
                />

                {/* Name badge on image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 18px",
                    background: "rgba(3, 0, 20, 0.7)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 14,
                    border: "1px solid rgba(0, 212, 255, 0.12)",
                    zIndex: 5,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#06ffd2",
                        boxShadow: "0 0 8px #06ffd2",
                        display: "inline-block",
                      }}
                    />
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.75rem",
                        color: "#00d4ff",
                        letterSpacing: "0.05em",
                      }}
                    >
                      AI Developer
                    </span>
                  </div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.65rem",
                      color: "rgba(168, 85, 247, 0.7)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    MCA @ SRM
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Story Card */}
            <div
              className="glass-card"
              style={{ padding: 36 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background:
                      "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(168, 85, 247, 0.2))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  🧠
                </div>
                <h3
                  className="font-orbitron"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  My Story
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {aboutData.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.8,
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {aboutData.highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card"
                style={{ padding: "24px 28px" }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.7rem",
                    color: "#00d4ff",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </span>
                <p
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    marginTop: 6,
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card"
              style={{
                padding: "28px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 20,
                textAlign: "center",
              }}
            >
              {[
                { number: "10+", label: "Projects" },
                { number: "3+", label: "Certifications" },
                { number: "1+", label: "Year Exp" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-orbitron gradient-text"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-secondary)",
                      marginTop: 4,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
