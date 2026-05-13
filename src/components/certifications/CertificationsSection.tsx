"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { certifications, featuredCertifications } from "@/data/portfolio";

/* Deterministic floating tech particles */
const TECH_PARTICLES = [
  { id: 0, size: 3, x: 10, y: 15, delay: 0, dur: 6, color: "#00d4ff" },
  { id: 1, size: 4, x: 80, y: 25, delay: 1.5, dur: 7, color: "#FFB700" },
  { id: 2, size: 2, x: 45, y: 80, delay: 3, dur: 5, color: "#a855f7" },
  { id: 3, size: 3, x: 70, y: 60, delay: 0.8, dur: 8, color: "#06ffd2" },
  { id: 4, size: 4, x: 25, y: 40, delay: 2.2, dur: 6.5, color: "#00d4ff" },
  { id: 5, size: 2, x: 90, y: 70, delay: 4, dur: 7.5, color: "#FFB700" },
];

function TechParticles() {
  return (
    <>
      {TECH_PARTICLES.map((p) => (
        <motion.div key={p.id}
          animate={{ y: [0, -25, 0], opacity: [0.2, 0.7, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", width: p.size, height: p.size, borderRadius: "50%",
            background: p.color, boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            left: `${p.x}%`, top: `${p.y}%`, pointerEvents: "none", zIndex: 1,
          }}
        />
      ))}
    </>
  );
}

/* Featured Certificate Card */
function FeaturedCertCard({
  cert,
  isInView,
  index,
}: {
  cert: (typeof featuredCertifications)[0];
  isInView: boolean;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showCert, setShowCert] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const isReversed = index % 2 === 1;

  return (
    <>
      <motion.div ref={cardRef}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 + index * 0.3, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
        className="cert-featured-card"
        style={{
          position: "relative", maxWidth: 950, margin: "0 auto 48px",
          borderRadius: 28, overflow: "hidden",
          background: "linear-gradient(145deg, rgba(15,10,40,0.8), rgba(5,2,20,0.6))",
          backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)",
          border: `1px solid ${cert.accent}20`,
          boxShadow: isHovered
            ? `0 0 60px ${cert.accent}18, 0 30px 80px rgba(0,0,0,0.5)`
            : `0 0 30px ${cert.accent}0a, 0 20px 60px rgba(0,0,0,0.4)`,
          transform: `perspective(1200px) rotateY(${mousePos.x * 3}deg) rotateX(${mousePos.y * -2}deg)`,
          transition: isHovered ? "box-shadow 0.4s, border-color 0.4s" : "all 0.5s ease-out",
          cursor: "default",
        }}
      >
        {/* Animated top border glow */}
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2, zIndex: 5,
            background: `linear-gradient(90deg, transparent, ${cert.accent}, #00d4ff, ${cert.accent}, transparent)`,
            backgroundSize: "200% 100%",
          }}
        />

        {/* Mouse-follow spotlight */}
        {isHovered && (
          <div style={{
            position: "absolute", width: 300, height: 300, borderRadius: "50%",
            background: `radial-gradient(circle, ${cert.accent}12, transparent 70%)`,
            left: `${(mousePos.x + 1) * 50}%`, top: `${(mousePos.y + 1) * 50}%`,
            transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 1,
            filter: "blur(20px)", transition: "left 0.1s, top 0.1s",
          }} />
        )}

        <TechParticles />

        <div className="cert-featured-grid" style={{
          display: "grid",
          gridTemplateColumns: isReversed ? "1fr 1fr" : "1fr 1fr",
          gap: 0, position: "relative", zIndex: 2,
          direction: isReversed ? "rtl" : "ltr",
        }}>
          {/* Certificate Image */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="cert-featured-image-col"
            style={{
              padding: 36, display: "flex", alignItems: "center", justifyContent: "center",
              background: `radial-gradient(ellipse at center, ${cert.accent}08, transparent 70%)`,
              direction: "ltr",
            }}
          >
            <div style={{
              position: "relative", borderRadius: 14, overflow: "hidden",
              border: `1px solid ${cert.accent}30`,
              boxShadow: `0 0 40px ${cert.accent}15, 0 15px 40px rgba(0,0,0,0.4)`,
            }}>
              <img src={cert.image} alt={cert.title}
                style={{ width: "100%", maxWidth: 380, height: "auto", display: "block" }}
              />
              {/* Shine sweep */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                style={{
                  position: "absolute", top: 0, left: 0, width: "50%", height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>

          {/* Certificate Details */}
          <div className="cert-featured-info-col" style={{
            padding: "44px 40px", display: "flex", flexDirection: "column",
            justifyContent: "center", direction: "ltr",
          }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.3 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 18,
                padding: "6px 14px", background: `${cert.accent}0c`,
                border: `1px solid ${cert.accent}22`, borderRadius: 100, alignSelf: "flex-start",
              }}
            >
              <span style={{ fontSize: "0.85rem" }}>{cert.id === "aws" ? "☁️" : "💻"}</span>
              <span className="font-mono" style={{ fontSize: "0.68rem", color: cert.accent, letterSpacing: "0.08em" }}>
                {cert.year} • CERTIFIED
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3 initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.3 }}
              className="font-orbitron"
              style={{
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)", fontWeight: 800, marginBottom: 6,
                letterSpacing: "0.03em",
                background: `linear-gradient(135deg, ${cert.accent}, #00d4ff)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              {cert.title}
            </motion.h3>

            <motion.p initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.3 }}
              style={{ fontSize: "0.85rem", color: cert.accent, marginBottom: 16, opacity: 0.75 }}
            >
              {cert.subtitle}
            </motion.p>

            <motion.p initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 + index * 0.3 }}
              style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 20 }}
            >
              {cert.description}
            </motion.p>

            {/* Skills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 24 }}>
              {cert.skills.map((s) => (
                <span key={s} className="font-mono" style={{
                  padding: "4px 12px", fontSize: "0.67rem", color: `${cert.accent}cc`,
                  background: `${cert.accent}0a`, border: `1px solid ${cert.accent}18`,
                  borderRadius: 7, letterSpacing: "0.03em",
                }}>
                  {s}
                </span>
              ))}
            </div>

            {/* View Button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowCert(true)}
              style={{
                alignSelf: "flex-start", padding: "11px 24px", fontSize: "0.85rem", fontWeight: 600,
                color: "#fff", background: `linear-gradient(135deg, ${cert.accent}30, rgba(0,212,255,0.15))`,
                border: `1px solid ${cert.accent}40`, borderRadius: 12, cursor: "pointer",
                fontFamily: "'Inter', sans-serif", display: "inline-flex", alignItems: "center",
                gap: 7, letterSpacing: "0.02em", boxShadow: `0 0 15px ${cert.accent}12`,
              }}
            >
              🏆 View Certificate
            </motion.button>
          </div>
        </div>


      </motion.div>

      {/* Fullscreen Modal */}
      {showCert && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => setShowCert(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 100000, display: "flex",
            alignItems: "center", justifyContent: "center",
            background: "rgba(3,0,20,0.92)", backdropFilter: "blur(20px)", cursor: "zoom-out",
          }}
        >
          <motion.img initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={cert.image} alt={cert.title}
            style={{
              maxWidth: "85vw", maxHeight: "85vh", borderRadius: 14,
              border: `1px solid ${cert.accent}30`,
              boxShadow: `0 0 80px ${cert.accent}20, 0 0 160px rgba(0,212,255,0.08)`,
            }}
          />
          <div style={{
            position: "absolute", top: 24, right: 24, width: 40, height: 40,
            borderRadius: "50%", background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)", display: "flex",
            alignItems: "center", justifyContent: "center", cursor: "pointer",
            fontSize: "1.1rem", color: "rgba(255,255,255,0.6)",
          }}>
            ✕
          </div>
        </motion.div>
      )}
    </>
  );
}

/* Other cert card */
function CertCard({ cert, index, isInView }: {
  cert: (typeof certifications)[0]; index: number; isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.2 + index * 0.12, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative", padding: "28px 24px",
        background: "linear-gradient(135deg, rgba(15,10,40,0.6), rgba(5,2,20,0.4))",
        border: isHovered ? "1px solid rgba(6,255,210,0.3)" : "1px solid rgba(255,255,255,0.05)",
        borderRadius: 18, backdropFilter: "blur(20px)", cursor: "default",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        transform: isHovered ? "translateY(-6px)" : "none",
        boxShadow: isHovered ? "0 0 30px rgba(6,255,210,0.1), 0 20px 40px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <motion.div
        animate={isHovered ? { scale: 1.15 } : { scale: 1 }}
        style={{ fontSize: "2.2rem", marginBottom: 14,
          filter: isHovered ? "drop-shadow(0 0 12px rgba(6,255,210,0.5))" : "none" }}
      >
        {cert.icon}
      </motion.div>
      <h3 style={{ fontSize: "0.98rem", fontWeight: 700, marginBottom: 6,
        color: isHovered ? "#fff" : "rgba(255,255,255,0.9)" }}>
        {cert.title}
      </h3>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "0.82rem", color: isHovered ? "#06ffd2" : "var(--text-secondary)" }}>
          {cert.issuer}
        </span>
        <span className="font-mono" style={{
          fontSize: "0.72rem", color: "rgba(255,255,255,0.3)",
          padding: "3px 10px", background: "rgba(255,255,255,0.03)", borderRadius: 6,
        }}>
          {cert.year}
        </span>
      </div>
    </motion.div>
  );
}

export default function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 30%, rgba(255,183,0,0.03), transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0,212,255,0.03), transparent 50%)",
      }} />

      <div className="section" ref={ref}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 60, textAlign: "center" }}
        >
          <span className="font-mono" style={{
            fontSize: "0.8rem", color: "#FFB700", letterSpacing: "0.2em", textTransform: "uppercase",
          }}>
            {"// ACHIEVEMENTS"}
          </span>
          <h2 className="section-title" style={{
            marginTop: 12, background: "linear-gradient(135deg, #FFB700, #00d4ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Certifications
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Continuous learning and professional excellence, one certification at a time.
          </p>
        </motion.div>

        {/* Featured Certificates */}
        {featuredCertifications.map((cert, i) => (
          <FeaturedCertCard key={cert.id} cert={cert} isInView={isInView} index={i} />
        ))}

        {/* Other Certs */}
        <motion.h3 initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="font-orbitron"
          style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 24, textAlign: "center",
            letterSpacing: "0.05em", color: "rgba(255,255,255,0.6)" }}
        >
          Other Certifications
        </motion.h3>

        <div className="cert-other-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20, maxWidth: 1000, margin: "0 auto",
        }}>
          {certifications.filter(c => c.id > 2).map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
