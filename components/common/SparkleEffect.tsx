"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

export function SparkleEffect({ count = 12, active }: { count?: number; active: boolean }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const triggerSparkles = useCallback(() => {
    const newSparkles: Sparkle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 1000);
  }, [count]);

  useEffect(() => {
    if (!active) return;
    const id = setTimeout(triggerSparkles, 0);
    return () => clearTimeout(id);
  }, [active, triggerSparkles]);

  return (
    <AnimatePresence>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="pointer-events-none fixed z-50"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
          initial={{ opacity: 1, scale: 0, rotate: 0 }}
          animate={{ opacity: 0, scale: 2, rotate: 180 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 text-[#f0c96b]">
            <path d="M12 2.6l2 5.4 5.3 2-5.3 2-2 5.4-2-5.4-5.3-2 5.3-2 2-5.4Z" fill="currentColor" />
          </svg>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
