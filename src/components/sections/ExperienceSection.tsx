"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Plane } from "lucide-react";
import { education, certifications, activities } from "@/data/experience";
import {
  staggerContainer,
  fadeUp,
  blurIn,
  cardReveal,
  lineReveal,
  viewport,
} from "@/lib/animations";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">
            Background
          </motion.p>
          <motion.h2
            variants={blurIn}
            className="section-title text-3xl sm:text-4xl gradient-text inline-block"
          >
            Education & Experience
          </motion.h2>
          <motion.div
            variants={lineReveal}
            className="h-[2px] w-24 mt-4 bg-gradient-to-r from-accent-primary to-accent-secondary origin-left"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="glass-card p-6 sm:p-8"
            style={{ perspective: "800px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="p-2.5 rounded-lg bg-accent-primary/10 text-accent-primary"
              >
                <GraduationCap size={22} />
              </motion.div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <div className="relative pl-6 border-l border-accent-primary/20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                className="absolute left-0 top-0 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-accent-primary"
              />
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
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
              </motion.div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={viewport}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="glass-card p-6 sm:p-8"
            style={{ perspective: "800px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="p-2.5 rounded-lg bg-accent-secondary/10 text-accent-secondary"
              >
                <Award size={22} />
              </motion.div>
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="pl-6 border-l border-accent-secondary/20 relative"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.6 + i * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="absolute left-0 top-0.5 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-accent-secondary"
                  />
                  <p className="text-text-primary font-medium text-sm">
                    {cert.name}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">
                    {cert.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-2 glass-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="p-2.5 rounded-lg bg-accent-warm/10 text-accent-warm"
              >
                <Plane size={22} />
              </motion.div>
              <h3 className="text-lg font-semibold">
                Activities & Interests
              </h3>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.4 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid sm:grid-cols-3 gap-4"
            >
              {activities.map((activity, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }}
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(108, 92, 231, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                  className="p-4 rounded-lg border border-border-subtle bg-bg-primary/30 text-sm text-text-secondary cursor-default"
                >
                  {activity}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
