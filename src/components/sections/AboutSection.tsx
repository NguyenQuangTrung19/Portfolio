"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TiltCard from "@/components/ui/TiltCard";

const AboutDecor3D = dynamic(
  () => import("@/components/three/SectionDecor3D").then((m) => m.AboutDecor3D),
  { ssr: false }
);
import {
  Globe,
  Smartphone,
  Database,
  Brain,
  Code,
  Users,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import {
  staggerContainer,
  staggerContainerSlow,
  fadeUp,
  fadeLeft,
  fadeRight,
  blurIn,
  cardReveal,
  lineReveal,
  viewport,
} from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={20} />,
  Smartphone: <Smartphone size={20} />,
  Database: <Database size={20} />,
  Brain: <Brain size={20} />,
  Code: <Code size={20} />,
  Users: <Users size={20} />,
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <AboutDecor3D />
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header with line reveal */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">
            About
          </motion.p>
          <motion.h2
            variants={blurIn}
            className="section-title text-3xl sm:text-4xl gradient-text inline-block"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={lineReveal}
            className="h-[2px] w-24 mt-4 bg-gradient-to-r from-accent-primary to-accent-secondary origin-left"
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio — slides in from left */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-2 space-y-5"
          >
            <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
              I{"'"}m a{" "}
              <span className="text-text-primary font-medium">
                Computer Science student
              </span>{" "}
              at Ton Duc Thang University, passionate about building{" "}
              <span className="text-accent-primary">production-grade</span>{" "}
              applications that solve real problems.
            </motion.p>
            <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
              My expertise covers the entire development lifecycle — from
              designing scalable architectures with{" "}
              <span className="text-text-primary font-medium">
                Next.js & NestJS
              </span>
              , to building cross-platform apps with{" "}
              <span className="text-text-primary font-medium">Flutter</span>,
              and integrating{" "}
              <span className="text-accent-secondary font-medium">AI/ML</span>{" "}
              models.
            </motion.p>
            <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
              I leverage{" "}
              <span className="text-accent-warm font-medium">
                AI-assisted development
              </span>{" "}
              and prompt engineering to accelerate workflows while maintaining
              full ownership of architecture decisions.
            </motion.p>

            {/* Education card */}
            <motion.div
              variants={cardReveal}
              className="glass-card p-5 mt-6"
            >
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
            </motion.div>
          </motion.div>

          {/* Skills Grid — staggered card reveal from right */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-4 auto-rows-fr"
          >
            {skillCategories.map((cat, i) => (
              <TiltCard key={cat.title}>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    x: i % 2 === 0 ? -20 : 20,
                    scale: 0.92,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="glass-card p-5 group cursor-default h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary/20"
                  >
                    {iconMap[cat.icon]}
                  </motion.div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.4 + si * 0.04,
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="px-2.5 py-1 text-xs text-text-muted rounded-md border border-border-subtle bg-bg-primary/50 transition-colors hover:text-text-secondary hover:border-border-hover"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
