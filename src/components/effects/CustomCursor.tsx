"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.2;
      dotY += (mouseY - dotY) * 0.2;
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      dot.style.left = `${dotX - 4}px`;
      dot.style.top = `${dotY - 4}px`;
      ring.style.left = `${ringX - 20}px`;
      ring.style.top = `${ringY - 20}px`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const frameId = requestAnimationFrame(animate);

    const handleEnterLink = () => {
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.left = `${ringX - 30}px`;
      ring.style.top = `${ringY - 30}px`;
      ring.style.borderColor = "rgba(168, 85, 247, 0.5)";
      dot.style.transform = "scale(1.5)";
    };

    const handleLeaveLink = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "rgba(0, 212, 255, 0.4)";
      dot.style.transform = "scale(1)";
    };

    const addLinkListeners = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", handleEnterLink);
        el.addEventListener("mouseleave", handleLeaveLink);
      });
    };

    addLinkListeners();
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
