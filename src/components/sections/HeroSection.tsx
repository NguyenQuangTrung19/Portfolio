"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink, Github } from "lucide-react";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});



const titleWords = ["Hi,", "I'm"];
const nameChars = "Quang Trung".split("");

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const wordPop = {
  hidden: { opacity: 0, y: 50, rotateX: -40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

const charReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.6 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* 3D Background Scene */}
      <HeroScene />

      {/* Ambient orbs with parallax */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 2 }}
      >
        <motion.div
          style={{ y: orbY1 }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-primary/[0.05] blur-[120px]"
        />
        <motion.div
          style={{ y: orbY2 }}
          className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-accent-secondary/[0.04] blur-[100px]"
        />
        <motion.div
          style={{ y: orbY3 }}
          className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] rounded-full bg-accent-warm/[0.03] blur-[100px]"
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-accent-primary/20 bg-accent-primary/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-secondary" />
            </span>
            <span className="text-xs font-mono text-accent-secondary tracking-wider uppercase">
              Open to opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            style={{ perspective: "600px" }}
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordPop}
                className="inline-block mr-[0.3em] text-text-primary"
                style={{ transformOrigin: "center bottom" }}
              >
                {word}
              </motion.span>
            ))}
            <br className="sm:hidden" />
            <span className="inline-block">
              {nameChars.map((char, i) => (
                <motion.span
                  key={i}
                  variants={charReveal}
                  className="inline-block gradient-text animate-gradient"
                  style={{ transformOrigin: "center bottom" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.9,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl lg:max-w-none mb-4 leading-relaxed"
          >
            <span className="text-text-primary font-semibold">
              Full-stack & Multi-platform Developer
            </span>{" "}
            crafting scalable Web, Mobile, and Desktop applications with modern
            technologies and AI integration.
          </motion.p>

          {/* Tech stack tags */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.07, delayChildren: 1.2 },
              },
            }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {[
              "Next.js",
              "NestJS",
              "Flutter",
              "TypeScript",
              "PostgreSQL",
              "AI/ML",
            ].map((tech) => (
              <motion.span
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0, rotate: -10 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  },
                }}
                className="px-3 py-1 text-xs font-mono text-text-muted rounded-full border border-border-subtle bg-bg-card/50"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.6,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/25"
            >
              View Projects
              <ExternalLink
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
            <motion.a
              href="https://github.com/NguyenQuangTrung19"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary text-sm font-medium transition-all duration-300 hover:border-border-hover hover:text-text-primary hover:bg-white/[0.02]"
            >
              <Github size={16} />
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
