"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate send — in production, connect to EmailJS / Supabase
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: "📱",
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: "Quick message",
      href: personalInfo.whatsapp,
    },
  ];

  const inputStyle = (): React.CSSProperties => ({
    width: "100%",
    padding: "14px 18px",
    fontSize: "0.9rem",
    color: "#fff",
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    borderRadius: 14,
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    transition: "all 0.3s",
    resize: "none" as const,
  });

  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(168, 85, 247, 0.05), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Blurred neon background portrait */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "700px",
          opacity: 0.06,
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <img
          src="/images/portrait-professional.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>

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
            {"// GET IN TOUCH"}
          </span>
          <h2 className="section-title gradient-text" style={{ marginTop: 12 }}>
            Let&apos;s Connect
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Have a project idea or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {/* Left - Contact Info + Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {/* Anti-gravity portrait */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ y: -12, scale: 1.02 }}
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                marginBottom: 8,
                border: "1px solid rgba(168, 85, 247, 0.15)",
                boxShadow:
                  "0 0 30px rgba(168, 85, 247, 0.1), 0 20px 50px rgba(0, 0, 0, 0.4)",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
              }}
            >
              <img
                src="/images/portrait-professional.jpg"
                alt="Mageshwaran M"
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              {/* Neon gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(3, 0, 20, 0.7) 80%, rgba(3, 0, 20, 0.9) 100%), linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(0, 212, 255, 0.05))",
                  pointerEvents: "none",
                }}
              />
              {/* Neon inner glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  boxShadow:
                    "inset 0 0 30px rgba(168, 85, 247, 0.08), inset 0 0 60px rgba(0, 212, 255, 0.04)",
                  pointerEvents: "none",
                }}
              />
              {/* Bottom text */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: 14,
                  right: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(0, 212, 255, 0.7)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Let&apos;s build together
                </span>
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#06ffd2",
                    boxShadow: "0 0 8px #06ffd2",
                    display: "inline-block",
                  }}
                />
              </div>
            </motion.div>

            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "18px 24px",
                  background:
                    "linear-gradient(135deg, rgba(15, 10, 40, 0.6), rgba(5, 2, 20, 0.4))",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: 16,
                  textDecoration: "none",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{link.icon}</span>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#00d4ff",
                      marginBottom: 2,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {link.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="glass-card"
              style={{
                padding: "24px 28px",
                marginTop: 8,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.5)",
                  lineHeight: 1.7,
                }}
              >
                Open for freelance projects, collaborations, and full-time
                opportunities. Let&apos;s build something amazing together! 🚀
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass-card"
            style={{ padding: 36 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div>
                <label
                  className="font-mono"
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255, 255, 255, 0.4)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="John Doe"
                  required
                  style={inputStyle()}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(0, 212, 255, 0.4)";
                    e.target.style.boxShadow =
                      "0 0 20px rgba(0, 212, 255, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label
                  className="font-mono"
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255, 255, 255, 0.4)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  required
                  style={inputStyle()}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(0, 212, 255, 0.4)";
                    e.target.style.boxShadow =
                      "0 0 20px rgba(0, 212, 255, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label
                  className="font-mono"
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(255, 255, 255, 0.4)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  style={inputStyle()}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(0, 212, 255, 0.4)";
                    e.target.style.boxShadow =
                      "0 0 20px rgba(0, 212, 255, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  padding: "16px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#fff",
                  background:
                    status === "success"
                      ? "linear-gradient(135deg, rgba(6, 255, 210, 0.3), rgba(0, 212, 255, 0.2))"
                      : "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(168, 85, 247, 0.2))",
                  border:
                    status === "success"
                      ? "1px solid rgba(6, 255, 210, 0.4)"
                      : "1px solid rgba(0, 212, 255, 0.3)",
                  borderRadius: 14,
                  cursor:
                    status === "sending" ? "not-allowed" : "pointer",
                  fontFamily: "'Inter', sans-serif",
                  transition: "all 0.3s",
                  boxShadow:
                    "0 0 20px rgba(0, 212, 255, 0.1)",
                  letterSpacing: "0.02em",
                }}
              >
                {status === "idle" && "✨ Send Message"}
                {status === "sending" && "⏳ Sending..."}
                {status === "success" && "✅ Message Sent!"}
                {status === "error" && "❌ Try Again"}
              </motion.button>
            </form>
          </motion.div>
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
