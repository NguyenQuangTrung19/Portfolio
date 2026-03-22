"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const sectionId = href.slice(1);
      const el = document.getElementById(sectionId);
      if (el) {
        const navHeight = 80;
        const top =
          el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    },
    []
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo with neon glow + text */}
        <motion.a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-2 md:gap-3 z-[60]"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/logo_neon.jpg"
            alt="NQT Logo"
            className="w-9 h-9 md:w-[60px] md:h-[60px] object-contain rounded-full neon-glow"
          />
          <div className="font-display text-base md:text-lg font-bold tracking-tight">
            <span className="gradient-text">NguyenQuangTrung</span>
            <span className="text-text-muted">.dev</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  activeSection === item.href.slice(1)
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-accent-primary/10 border border-accent-primary/20"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors z-[60]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu — Full screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-[55] bg-bg-primary/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`text-2xl font-display font-semibold px-8 py-4 rounded-2xl transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-accent-primary bg-accent-primary/10"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
