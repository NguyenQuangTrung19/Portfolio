import type { Variants, Transition } from "framer-motion";

// ===== SMOOTH EASING =====
export const smoothSpring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.5,
};

export const smoothEase: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1], // expo out
};

export const slowEase: Transition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1],
};

// ===== VIEWPORT CONFIG =====
export const viewport = {
  once: true,
  margin: "-100px",
};

// ===== STAGGER CONTAINER =====
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ===== FADE VARIANTS =====
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== SCALE VARIANTS =====
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

// ===== BLUR VARIANTS =====
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== SLIDE + ROTATE =====
export const slideRotateIn: Variants = {
  hidden: { opacity: 0, x: -60, rotate: -3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== CARD VARIANTS =====
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== LINE REVEAL (for decorative lines) =====
export const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== TEXT CHARACTER SPLIT =====
export const charVariant: Variants = {
  hidden: { opacity: 0, y: 30, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== WORD SPLIT =====
export const wordVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

// ===== BADGE / TAG POP =====
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

// ===== DRAW SVG =====
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
};
