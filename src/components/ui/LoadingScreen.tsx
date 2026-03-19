"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Generate star data only on client after mount
  const [stars] = useState(() =>
    Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 1.5 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a1a]"
        >
          {/* Animated stars background */}
          <div className="absolute inset-0 overflow-hidden">
            {mounted && stars.map((star, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: star.duration,
                  repeat: Infinity,
                  delay: star.delay,
                }}
                className="absolute w-1 h-1 rounded-full bg-white/60"
                style={{
                  left: star.left,
                  top: star.top,
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-10"
          >
            <span className="text-3xl font-display font-bold">
              <span className="gradient-text animate-gradient">NQT</span>
              <span className="text-text-secondary">.dev</span>
            </span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #6c5ce7, #00cec9)",
              }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Progress text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="text-xs font-mono text-text-muted"
          >
            {progress}%
          </motion.p>

          {/* Orbiting dots */}
          <div className="absolute">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute"
                style={{
                  width: 80 + i * 40,
                  height: 80 + i * 40,
                  left: -(40 + i * 20),
                  top: -(40 + i * 20),
                }}
              >
                <div
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: ["#6c5ce7", "#00cec9", "#fd79a8"][i],
                    top: 0,
                    left: "50%",
                    boxShadow: `0 0 8px ${["#6c5ce7", "#00cec9", "#fd79a8"][i]}`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
