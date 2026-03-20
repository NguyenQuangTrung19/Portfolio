"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

const MUSIC_SRC = "/music/background.mp3";
const DEFAULT_VOLUME = 0.3;

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Initialize audio element on mount
  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.volume = DEFAULT_VOLUME;
    audio.preload = "none";
    audioRef.current = audio;

    // Sync state if audio ends unexpectedly
    audio.addEventListener("pause", () => setIsPlaying(false));
    audio.addEventListener("play", () => setIsPlaying(true));

    return () => {
      audio.pause();
      audio.removeEventListener("pause", () => setIsPlaying(false));
      audio.removeEventListener("play", () => setIsPlaying(true));
      audio.src = "";
    };
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {
        // Autoplay blocked by browser — silently fail
      });
    } else {
      audio.pause();
    }
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 text-xs font-medium text-text-primary bg-bg-card border border-border-subtle rounded-lg whitespace-nowrap pointer-events-none"
          >
            {isPlaying ? "Tắt nhạc" : "Bật nhạc nền"}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="w-2 h-2 bg-bg-card border-r border-b border-border-subtle rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music button */}
      <motion.button
        onClick={toggleMusic}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className={`
          relative flex items-center justify-center
          w-12 h-12 rounded-full
          backdrop-blur-md border transition-all duration-500 cursor-pointer
          ${
            isPlaying
              ? "bg-accent-primary/20 border-accent-primary/40 shadow-[0_0_20px_rgba(124,108,247,0.3)]"
              : "bg-bg-card/80 border-border-subtle hover:border-border-hover hover:shadow-[0_0_15px_rgba(124,108,247,0.15)]"
          }
        `}
      >
        {/* Spinning ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-primary/60 border-r-accent-secondary/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Pulse ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border border-accent-primary/30"
            animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        {/* Icon */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isPlaying ? "playing" : "paused"}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            {isPlaying ? (
              <Music size={20} className="text-accent-primary" />
            ) : (
              <VolumeX size={20} className="text-text-muted" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
