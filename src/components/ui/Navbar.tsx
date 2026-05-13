"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(
    (href: string) => {
      setIsMobileOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 24px",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: isScrolled
            ? "rgba(3, 0, 20, 0.8)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(255, 255, 255, 0.05)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#hero");
            }}
            className="font-orbitron"
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              background: "linear-gradient(135deg, #00d4ff, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {"<MW />"}
          </motion.a>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
            className="nav-desktop"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  style={{
                    padding: "8px 16px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: isActive
                      ? "#00d4ff"
                      : "rgba(255, 255, 255, 0.6)",
                    textDecoration: "none",
                    borderRadius: 10,
                    position: "relative",
                    transition: "color 0.3s",
                    letterSpacing: "0.02em",
                  }}
                  whileHover={{ color: "#00d4ff" }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 20,
                        height: 2,
                        background: "linear-gradient(90deg, #00d4ff, #a855f7)",
                        borderRadius: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            className="nav-mobile-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={
                isMobileOpen
                  ? { rotate: 45, y: 7 }
                  : { rotate: 0, y: 0 }
              }
              style={{
                width: 24,
                height: 2,
                background: "#00d4ff",
                borderRadius: 2,
                display: "block",
                transition: "all 0.3s",
              }}
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{
                width: 24,
                height: 2,
                background: "#00d4ff",
                borderRadius: 2,
                display: "block",
              }}
            />
            <motion.span
              animate={
                isMobileOpen
                  ? { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0 }
              }
              style={{
                width: 24,
                height: 2,
                background: "#00d4ff",
                borderRadius: 2,
                display: "block",
                transition: "all 0.3s",
              }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(300px, 80vw)",
              background: "rgba(3, 0, 20, 0.95)",
              backdropFilter: "blur(30px)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              paddingTop: 100,
              paddingLeft: 32,
              gap: 8,
              borderLeft: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  padding: "12px 0",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "#00d4ff"
                      : "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 998,
            }}
          />
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
