"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { contactInfo, socialLinks } from "@/data/social";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const socialIconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Mail: <Mail size={18} />,
};

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Open mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div {...fadeInUp} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-title text-3xl sm:text-4xl gradient-text inline-block">
            Get In Touch
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg">
            Interested in working together? Feel free to reach out. I{"'"}m always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                  <Mail size={16} />
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-accent-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                  <Phone size={16} />
                </div>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                  <MapPin size={16} />
                </div>
                <span>{contactInfo.location}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4">
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider mb-3">
                Connect
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-border-subtle text-text-muted hover:text-accent-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-300"
                    aria-label={link.name}
                  >
                    {socialIconMap[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
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
              </div>
              <div>
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
              </div>
            </div>
            <div>
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
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-primary text-white text-sm font-medium transition-all duration-300 hover:bg-accent-primary/90 hover:shadow-lg hover:shadow-accent-primary/25 disabled:opacity-50"
              disabled={sent}
            >
              {sent ? (
                "Opening email ✓"
              ) : (
                <>
                  Send Message
                  <Send
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
