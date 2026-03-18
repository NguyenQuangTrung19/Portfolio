"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-primary/[0.07] blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-accent-secondary/[0.05] blur-[100px]" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-accent-warm/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          {"Hi, I'm "}
          <span className="gradient-text animate-gradient">Quang Trung</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          <span className="text-text-primary font-semibold">
            Full-stack & Multi-platform Developer
          </span>{" "}
          crafting scalable Web, Mobile, and Desktop applications with modern
          technologies and AI integration.
        </motion.p>

        {/* Tech stack tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {["Next.js", "NestJS", "Flutter", "TypeScript", "PostgreSQL", "AI/ML"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                className="px-3 py-1 text-xs font-mono text-text-muted rounded-full border border-border-subtle bg-bg-card/50"
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary text-white text-sm font-medium transition-all duration-300 hover:bg-accent-primary/90 hover:shadow-lg hover:shadow-accent-primary/25"
          >
            View Projects
            <ExternalLink
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="https://github.com/NguyenQuangTrung19"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-subtle text-text-secondary text-sm font-medium transition-all duration-300 hover:border-border-hover hover:text-text-primary hover:bg-white/[0.02]"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
