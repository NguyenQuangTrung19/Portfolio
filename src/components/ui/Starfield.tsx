"use client";

import { useState, useEffect } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

function generateStars(): Star[] {
  const result: Star[] = [];
  for (let i = 0; i < 120; i++) {
    result.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.1,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    });
  }
  return result;
}

export default function Starfield() {
  const [stars, setStars] = useState<Star[]>([]);

  // Only generate stars on client to avoid hydration mismatch
  useEffect(() => {
    setStars(generateStars());
  }, []);

  if (stars.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            background:
              star.size > 1.5
                ? "radial-gradient(circle, rgba(108,92,231,0.9), rgba(108,92,231,0.1))"
                : "radial-gradient(circle, rgba(255,255,255,0.9), rgba(255,255,255,0.2))",
            boxShadow:
              star.size > 1.5
                ? "0 0 4px rgba(108,92,231,0.4)"
                : "0 0 2px rgba(255,255,255,0.3)",
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
