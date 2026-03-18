"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { projects, categories, type Project } from "@/data/projects";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card p-6 group flex flex-col"
    >
      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent-primary bg-accent-primary/10 rounded-full border border-accent-primary/20">
          {project.category}
        </span>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-text-muted hover:text-text-primary transition-colors rounded-md hover:bg-white/[0.03]"
              aria-label={`${project.title} GitHub`}
            >
              <Github size={15} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-text-muted hover:text-accent-secondary transition-colors rounded-md hover:bg-white/[0.03]"
              aria-label={`${project.title} Demo`}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Title & subtitle */}
      <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent-glow transition-colors">
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
        {project.highlights.slice(0, 3).map((h) => (
          <li
            key={h}
            className="flex items-start gap-2 text-xs text-text-muted"
          >
            <ChevronRight
              size={12}
              className="mt-0.5 text-accent-primary shrink-0"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border-subtle">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-[10px] font-mono text-text-muted rounded border border-border-subtle bg-bg-primary/50"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
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
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-12">
          <p className="section-label mb-3">Work</p>
          <h2 className="section-title text-3xl sm:text-4xl gradient-text inline-block">
            Featured Projects
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-accent-primary/15 border-accent-primary/30 text-accent-primary"
                  : "border-border-subtle text-text-muted hover:text-text-secondary hover:border-border-hover"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/NguyenQuangTrung19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-primary transition-colors"
          >
            <Github size={16} />
            View more on GitHub
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
