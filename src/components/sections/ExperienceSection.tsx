"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Plane } from "lucide-react";
import { education, certifications, activities } from "@/data/experience";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-label mb-3">Background</p>
          <h2 className="section-title text-3xl sm:text-4xl gradient-text inline-block">
            Education & Experience
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-accent-primary/10 text-accent-primary">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <div className="relative pl-6 border-l border-accent-primary/20">
              <div className="absolute left-0 top-0 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-accent-primary" />

              <h4 className="text-text-primary font-semibold text-base">
                {education.school}
              </h4>
              <p className="text-sm text-accent-secondary mt-1">
                {education.degree}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-text-muted">
                <span>GPA: {education.gpa}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  {education.location}
                </span>
                <span>•</span>
                <span>{education.period}</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-accent-secondary/10 text-accent-secondary">
                <Award size={22} />
              </div>
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="pl-6 border-l border-accent-secondary/20 relative">
                  <div className="absolute left-0 top-0.5 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-accent-secondary" />
                  <p className="text-text-primary font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{cert.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 glass-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-accent-warm/10 text-accent-warm">
                <Plane size={22} />
              </div>
              <h3 className="text-lg font-semibold">Activities & Interests</h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {activities.map((activity, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-border-subtle bg-bg-primary/30 text-sm text-text-secondary"
                >
                  {activity}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
