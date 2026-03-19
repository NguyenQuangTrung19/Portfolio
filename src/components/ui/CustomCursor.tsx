"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const mouse = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Hide on mobile/touch devices
    if ("ontouchstart" in window) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Animation loop
    let animId: number;
    const animate = () => {
      // Neon ring - medium follow speed
      ringPos.current.x +=
        (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y +=
        (mouse.current.y - ringPos.current.y) * 0.15;

      // Glow - slow follow (laggy trail)
      glowPos.current.x +=
        (mouse.current.x - glowPos.current.x) * 0.06;
      glowPos.current.y +=
        (mouse.current.y - glowPos.current.y) * 0.06;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowPos.current.x}px, ${glowPos.current.y}px)`;
      }

      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Small neon ring around cursor */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 28,
          height: 28,
          marginLeft: -14,
          marginTop: -14,
          borderRadius: "50%",
          border: "1.5px solid rgba(0, 206, 201, 0.5)",
          boxShadow: "0 0 8px rgba(0, 206, 201, 0.3), inset 0 0 8px rgba(0, 206, 201, 0.1)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Large neon glow trail */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 250,
          height: 250,
          marginLeft: -125,
          marginTop: -125,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,92,231,0.05) 0%, rgba(0,206,201,0.03) 35%, transparent 65%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
}
