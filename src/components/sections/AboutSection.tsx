"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  MapPin,
  Calendar,
  Trophy,
  Heart,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import {
  staggerContainer,
  staggerContainerSlow,
  fadeUp,
  fadeLeft,
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

const tabs = [
  { id: "developer", label: "Developer", icon: <Code size={16} /> },
  { id: "personal", label: "Personal Life", icon: <Heart size={16} /> },
] as const;

type TabId = (typeof tabs)[number]["id"];

/* ── Developer Tab Content ─────────────────────── */
function DeveloperTab() {
  return (
    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
      {/* Bio */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="lg:col-span-2 space-y-5"
      >
        <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
          I{"'"}m a{" "}
          <span className="text-text-primary font-medium">Computer Science student</span>{" "}
          at Ton Duc Thang University with a deep passion for turning ideas into{" "}
          <span className="text-accent-primary">production-grade systems</span>{" "}
          that solve real-world problems — not just academic exercises, but
          fully deployed applications used by real people.
        </motion.p>
        <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
          I{"'"}ve independently architected and built{" "}
          <span className="text-text-primary font-medium">full-stack platforms</span>{" "}
          from the ground up:{" "}
          <span className="text-accent-secondary font-medium">EduSphere</span>{" "}
          — a school management system with 21 pages, 20+ REST APIs, JWT auth & RBAC;{" "}
          <span className="text-accent-secondary font-medium">FishCash POS</span>{" "}
          — an offline-first cross-platform POS serving the Vietnamese seafood industry
          with real-time sync, PDF invoicing, and auto-update via GitHub Releases.
        </motion.p>
        <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
          Beyond web & mobile, I{"'"}ve built{" "}
          <span className="text-text-primary font-medium">desktop applications</span>{" "}
          with C# WinForms, implemented{" "}
          <span className="text-text-primary font-medium">AI algorithms</span>{" "}
          (Alpha-Beta Pruning, A*, UCS) for game intelligence, and shipped
          bilingual SPAs with 880+ i18n keys. My stack spans{" "}
          <span className="text-accent-primary font-medium">Next.js</span>,{" "}
          <span className="text-accent-primary font-medium">NestJS</span>,{" "}
          <span className="text-accent-primary font-medium">Flutter</span>,{" "}
          and <span className="text-accent-primary font-medium">PostgreSQL</span>.
        </motion.p>
        <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
          I use{" "}
          <span className="text-accent-warm font-medium">AI as an accelerator</span>
          , not a crutch. Every architecture decision, every database schema,
          every deployment pipeline — that{"'"}s{" "}
          <span className="text-text-primary font-semibold">my work</span>.
          AI helps me move faster, but the{" "}
          <span className="text-accent-secondary font-medium">
            vision, ownership, and accountability
          </span>{" "}
          are entirely mine.
        </motion.p>

        {/* Education card */}
        <motion.div variants={cardReveal} className="glass-card p-5 mt-6">
          <p className="section-label mb-2">Education</p>
          <p className="text-text-primary font-semibold">Ton Duc Thang University</p>
          <p className="text-sm text-text-secondary">B.Sc. Computer Science • GPA: 3.0/4.0</p>
          <p className="text-xs text-text-muted mt-1">Ho Chi Minh City • 2022 — Present</p>
        </motion.div>
      </motion.div>

      {/* Skills Grid */}
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
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
                <h3 className="text-sm font-semibold text-text-primary">{cat.title}</h3>
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
  );
}

/* ── Personal Life Tab Content ─────────────────── */
const personalCards = [
  {
    icon: <Calendar size={20} />,
    title: "Birthday",
    content: "February 7, 2004",
    detail: "Aquarius ♒ • Giáp Thân • Mệnh Tuyền Trung Thủy",
    color: "text-accent-primary",
    bgColor: "bg-accent-primary/10",
  },
  {
    icon: <MapPin size={20} />,
    title: "Hometown",
    content: "Xuyên Mộc, Bà Rịa-Vũng Tàu",
    detail: "Born and raised in a small town, dreaming big in HCMC",
    color: "text-accent-secondary",
    bgColor: "bg-accent-secondary/10",
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Education Journey",
    content: "Phước Bửu → Phước Tân → THPT Xuyên Mộc → TDTU",
    detail: "Always in honors classes • Mom was my Chemistry teacher in 9th grade",
    color: "text-accent-glow",
    bgColor: "bg-accent-glow/10",
  },
  {
    icon: <Trophy size={20} />,
    title: "Sports Achievements",
    content: "Best Player — TDTU Games 2024 ⚽",
    detail: "Champion IT Faculty Sports 2025 • Jersey #19 • Football, badminton, volleyball & more",
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Football Fan",
    content: "Manchester United • #19",
    detail: "Idol: Wayne Rooney • GOAT: Messi • Passionate about the beautiful game",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: <Heart size={20} />,
    title: "Favorites",
    content: "AOT • One Piece • Stranger Things",
    detail: "Anime: Attack on Titan • Manga: One Piece • Character: Monkey D. Luffy • Series: Stranger Things • Song: End of Beginning",
    color: "text-accent-warm",
    bgColor: "bg-accent-warm/10",
  },
];

function PersonalTab() {
  return (
    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
      {/* Story */}
      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="lg:col-span-2 space-y-5"
      >
        <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
          Beyond the code, I{"'"}m a{" "}
          <span className="text-text-primary font-medium">small-town kid</span>{" "}
          from Xuyên Mộc, Bà Rịa-Vũng Tàu who grew up fascinated by technology.
          My parents are both{" "}
          <span className="text-accent-secondary font-medium">teachers</span>{" "}
          — they taught me discipline, but my love for{" "}
          <span className="text-accent-primary">computers</span>{" "}
          was entirely self-discovered.
        </motion.p>
        <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
          I decided on IT since{" "}
          <span className="text-text-primary font-medium">middle school</span>. While
          others were still figuring out their paths, I was already messing around
          with phones and computers, exploring every new piece of tech I could find.
          Despite{" "}
          <span className="text-accent-warm font-medium">no one in my family</span>{" "}
          working in IT, I chose this path — not because it{"'"}s a trending field,
          but because it{"'"}s truly{" "}
          <span className="text-text-primary font-semibold italic">my calling</span>.
        </motion.p>
        <motion.p variants={fadeLeft} className="text-text-secondary leading-relaxed">
          When I{"'"}m not coding, you{"'"}ll find me on the{" "}
          <span className="text-accent-secondary font-medium">football field</span>.
          I wear{" "}
          <span className="text-text-primary font-semibold">jersey #19</span>{" "}
          and it{"'"}s been my lucky number — I won{" "}
          <span className="text-amber-400 font-medium">Best Player at TDTU Games 2024</span>{" "}
          and became champion at the IT Faculty Sports 2025.
        </motion.p>

        {/* Why IT card */}
        <motion.div variants={cardReveal} className="glass-card p-5 mt-6">
          <p className="section-label mb-2">Why IT? 💡</p>
          <p className="text-text-primary font-semibold">
            A passion since middle school
          </p>
          <p className="text-sm text-text-secondary">
            No one in my family works in IT. I chose my own path — not because
            it{"'"} a trending field, but because it{"'"}s truly my calling.
          </p>
          <p className="text-xs text-text-muted mt-2">
            Fun fact: Mom was my Chemistry teacher in 9th grade at THCS Phước Tân! 👩‍🏫
          </p>
        </motion.div>
      </motion.div>

      {/* Personal Cards Grid */}
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
        className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
      >
        {personalCards.map((card, i) => (
          <TiltCard key={card.title}>
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
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="glass-card p-5 group cursor-default h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${card.bgColor} ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="text-sm font-semibold text-text-primary">{card.title}</h3>
              </div>
              <p className={`text-sm font-medium ${card.color} mb-1`}>{card.content}</p>
              <p className="text-xs text-text-muted leading-relaxed">{card.detail}</p>
            </motion.div>
          </TiltCard>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Main About Section ────────────────────────── */
export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabId>("developer");

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <AboutDecor3D />
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

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-accent-primary text-white shadow-lg shadow-accent-primary/25"
                  : "glass text-text-secondary hover:text-text-primary hover:bg-white/[0.05]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab content with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === "developer" ? <DeveloperTab /> : <PersonalTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
