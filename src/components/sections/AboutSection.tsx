"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Brain,
  Code,
  Users,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={20} />,
  Smartphone: <Smartphone size={20} />,
  Database: <Database size={20} />,
  Brain: <Brain size={20} />,
  Code: <Code size={20} />,
  Users: <Users size={20} />,
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-label mb-3">About</p>
          <h2 className="section-title text-3xl sm:text-4xl gradient-text inline-block">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <p className="text-text-secondary leading-relaxed">
              I{"'"}m a <span className="text-text-primary font-medium">Computer Science student</span> at Ton Duc Thang University, passionate about building{" "}
              <span className="text-accent-primary">production-grade</span> applications that solve real problems.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My expertise covers the entire development lifecycle — from designing scalable architectures with{" "}
              <span className="text-text-primary font-medium">Next.js & NestJS</span>, to building cross-platform apps with{" "}
              <span className="text-text-primary font-medium">Flutter</span>, and integrating{" "}
              <span className="text-accent-secondary font-medium">AI/ML</span> models.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I leverage{" "}
              <span className="text-accent-warm font-medium">AI-assisted development</span>{" "}
              and prompt engineering to accelerate workflows while maintaining full ownership of architecture decisions.
            </p>

            {/* Education card */}
            <div className="glass-card p-5 mt-6">
              <p className="section-label mb-2">Education</p>
              <p className="text-text-primary font-semibold">
                Ton Duc Thang University
              </p>
              <p className="text-sm text-text-secondary">
                B.Sc. Computer Science • GPA: 3.0/4.0
              </p>
              <p className="text-xs text-text-muted mt-1">
                Ho Chi Minh City • 2022 — Present
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="glass-card p-5 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary/20">
                    {iconMap[cat.icon]}
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs text-text-muted rounded-md border border-border-subtle bg-bg-primary/50 transition-colors hover:text-text-secondary hover:border-border-hover"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
