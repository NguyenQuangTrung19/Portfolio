"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { projects, categories, type Project } from "@/data/projects";
import TiltCard from "@/components/ui/TiltCard";

const ProjectsDecor3D = dynamic(
  () => import("@/components/three/SectionDecor3D").then((m) => m.ProjectsDecor3D),
  { ssr: false }
);
import {
  staggerContainer,
  fadeUp,
  blurIn,
  lineReveal,
  viewport,
} from "@/lib/animations";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <TiltCard>
    <motion.div
      layout
      initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 5 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="glass-card p-6 group flex flex-col h-full"
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent-primary bg-accent-primary/10 rounded-full border border-accent-primary/20"
        >
          {project.category}
        </motion.span>
        <div className="flex items-center gap-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors rounded-md hover:bg-white/[0.03]"
              aria-label={`${project.title} GitHub`}
            >
              <Github size={15} />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-1.5 text-text-muted hover:text-accent-secondary transition-colors rounded-md hover:bg-white/[0.03]"
              aria-label={`${project.title} Demo`}
            >
              <ExternalLink size={15} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent-glow transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-xs text-text-muted font-mono mb-3">
        {project.subtitle}
      </p>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-5">
        {project.highlights.slice(0, 3).map((h, i) => (
          <motion.li
            key={h}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
            className="flex items-start gap-2 text-xs text-text-muted"
          >
            <ChevronRight
              size={12}
              className="mt-0.5 text-accent-primary shrink-0"
            />
            <span>{h}</span>
          </motion.li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border-subtle">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-[10px] font-mono text-text-muted rounded border border-border-subtle bg-bg-primary/50 transition-colors group-hover:border-border-hover"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
    </TiltCard>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <ProjectsDecor3D />
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">
            Work
          </motion.p>
          <motion.h2
            variants={blurIn}
            className="section-title text-3xl sm:text-4xl gradient-text inline-block"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={lineReveal}
            className="h-[2px] w-24 mt-4 bg-gradient-to-r from-accent-primary to-accent-secondary origin-left"
          />
        </motion.div>

        {/* Category filter with staggered pop */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.3 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              variants={{
                hidden: { opacity: 0, y: 15, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-accent-primary/15 border-accent-primary/30 text-accent-primary"
                  : "border-border-subtle text-text-muted hover:text-text-secondary hover:border-border-hover"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/NguyenQuangTrung19"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-primary transition-colors"
          >
            <Github size={16} />
            View more on GitHub
            <ExternalLink size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
