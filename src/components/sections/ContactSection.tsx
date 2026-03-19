"use client";

import { useState, type FormEvent } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { contactInfo, socialLinks } from "@/data/social";
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

const ContactDecor3D = dynamic(
  () => import("@/components/three/SectionDecor3D").then((m) => m.ContactDecor3D),
  { ssr: false }
);

const socialIconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Mail: <Mail size={18} />,
};

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <ContactDecor3D />
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
            Contact
          </motion.p>
          <motion.h2
            variants={blurIn}
            className="section-title text-3xl sm:text-4xl gradient-text inline-block"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            variants={lineReveal}
            className="h-[2px] w-24 mt-4 bg-gradient-to-r from-accent-primary to-accent-secondary origin-left"
          />
          <motion.p
            variants={fadeUp}
            className="text-text-secondary mt-6 max-w-lg"
          >
            Interested in working together? Feel free to reach out. I{"'"}m
            always open to new opportunities and collaborations.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info — slide from left */}
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="md:col-span-2 space-y-6"
          >
            <motion.div variants={fadeLeft} className="space-y-4">
              {[
                {
                  icon: <Mail size={16} />,
                  content: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                },
                {
                  icon: <Phone size={16} />,
                  content: contactInfo.phone,
                },
                {
                  icon: <MapPin size={16} />,
                  content: contactInfo.location,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-3 text-sm text-text-secondary"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary"
                  >
                    {item.icon}
                  </motion.div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-accent-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-4"
            >
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-3">
                Connect
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={
                      link.url.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.7 + i * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-lg border border-border-subtle text-text-muted hover:text-accent-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-300"
                    aria-label={link.name}
                  >
                    {socialIconMap[link.icon]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form — slide from right */}
          <motion.form
            initial={{ opacity: 0, x: 60, rotateY: -3 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={viewport}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card p-6 sm:p-8 space-y-5"
            style={{ perspective: "800px" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-text-muted mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, name: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 text-sm bg-bg-primary/50 border border-border-subtle rounded-lg text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-text-muted mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, email: e.target.value }))
                  }
                  className="w-full px-4 py-2.5 text-sm bg-bg-primary/50 border border-border-subtle rounded-lg text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all"
                  placeholder="you@example.com"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <label
                htmlFor="message"
                className="block text-xs font-medium text-text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((p) => ({ ...p, message: e.target.value }))
                }
                className="w-full px-4 py-2.5 text-sm bg-bg-primary/50 border border-border-subtle rounded-lg text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/25 disabled:opacity-50"
              disabled={sent}
            >
              {sent ? (
                "Opening email ✓"
              ) : (
                <>
                  Send Message
                  <Send
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
