"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Raw mouse coordinates for instant inner dot tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for outer trailing ring
  const springConfig = { damping: 24, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(pointer: fine)");
    
    // Defer check to satisfy React 19 effect rules
    const timer = setTimeout(() => {
      setIsTouchDevice(!mq.matches);
    }, 0);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(!e.matches);
    };
    mq.addEventListener("change", handlePointerChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible((prev) => (prev ? prev : true));

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer, [data-cursor-hover]")
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      clearTimeout(timer);
      mq.removeEventListener("change", handlePointerChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* 1. Outer Smooth Trailing Ring (Constant size, 100% transparent, NO blur) */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.85 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none bg-transparent transition-colors duration-150 ${
          isHovered
            ? "border-2 border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]"
            : "border border-slate-800/40 shadow-sm"
        }`}
      />

      {/* 2. Inner Solid Center Dot (Instant mouse lock, crisp & clear) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.75 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_6px_rgba(37,99,235,0.5)] pointer-events-none"
      />
    </div>
  );
}
