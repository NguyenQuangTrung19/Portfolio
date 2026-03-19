"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function FloatingRobot() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed right-0 bottom-16 z-40 pointer-events-auto hidden md:block"
    >
      {/* Outer container clips the bottom where watermark sits */}
      <div className="w-[219px] h-[280px] overflow-hidden">
        {/* Inner: taller to hide watermark, scaled down so robot fits with wave */}
        <div className="w-[330px] h-[340px]" style={{ transform: "scale(1.0)", transformOrigin: "center top" }}>
          <Spline scene="https://prod.spline.design/HogCzYbhRvbwPROn/scene.splinecode" />
        </div>
      </div>
    </motion.div>
  );
}