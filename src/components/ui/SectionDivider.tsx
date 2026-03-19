"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "wave" | "curve" | "tilt";
  colorFrom?: string;
  colorTo?: string;
  flip?: boolean;
}

export default function SectionDivider({
  variant = "wave",
  colorFrom = "transparent",
  colorTo = "transparent",
  flip = false,
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);
  const pathOffset = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const paths = {
    wave: "M0,64 C320,120 480,0 720,80 C960,160 1200,40 1440,96 L1440,160 L0,160 Z",
    curve: "M0,128 Q720,0 1440,128 L1440,160 L0,160 Z",
    tilt: "M0,100 L1440,40 L1440,160 L0,160 Z",
  };

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden pointer-events-none select-none"
      style={{
        height: "80px",
        marginTop: "-40px",
        marginBottom: "-40px",
        zIndex: 5,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <motion.svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id={`divider-grad-${variant}-${flip}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6c5ce7" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#00cec9" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <motion.path
          d={paths[variant]}
          fill={`url(#divider-grad-${variant}-${flip})`}
        />
      </motion.svg>

      {/* Subtle glow line */}
      <div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          top: "50%",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(108,92,231,0.2) 20%, rgba(0,206,201,0.3) 50%, rgba(167,139,250,0.2) 80%, transparent 100%)",
        }}
      />
    </div>
  );
}
