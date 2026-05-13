"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        background:
          "linear-gradient(180deg, transparent, rgba(3, 0, 20, 0.5))",
      }}
    >
      {/* Top Glow Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), rgba(168, 85, 247, 0.2), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <motion.div
              className="font-orbitron"
              style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                marginBottom: 16,
                background: "linear-gradient(135deg, #00d4ff, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.1em",
              }}
            >
              {"<MW />"}
            </motion.div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Building intelligent digital experiences with a passion for AI and
              cutting-edge web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-mono"
              style={{
                fontSize: "0.7rem",
                color: "#00d4ff",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Navigation
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(255, 255, 255, 0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#00d4ff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "rgba(255, 255, 255, 0.5)")
                    }
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              className="font-mono"
              style={{
                fontSize: "0.7rem",
                color: "#a855f7",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: "💼", href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: "🐙", href: personalInfo.github, label: "GitHub" },
                { icon: "💬", href: personalInfo.whatsapp, label: "WhatsApp" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 14,
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    textDecoration: "none",
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.04)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255, 255, 255, 0.3)",
            }}
          >
            © {new Date().getFullYear()} Mageshwaran M. Crafted with 💙 &
            AI
          </p>
          <p
            className="font-mono"
            style={{
              fontSize: "0.68rem",
              color: "rgba(255, 255, 255, 0.2)",
              letterSpacing: "0.05em",
            }}
          >
            v1.0.0 • Next.js • Three.js • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
