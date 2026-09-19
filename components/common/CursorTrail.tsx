"use client";

import { useEffect, useRef, useState } from "react";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export function CursorTrail({ enabled = true }: { enabled?: boolean }) {
  const [particles, setParticles] = useState<TrailParticle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const idRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const id = idRef.current++;
    const newParticle: TrailParticle = {
      id,
      x: mousePos.x,
      y: mousePos.y,
      size: Math.random() * 4 + 2,
      opacity: 0.6,
    };

    setParticles((prev) => [...prev.slice(-20), newParticle]);

    const fade = () => {
      setParticles((prev) =>
        prev.map((p) => (p.id === id ? { ...p, opacity: p.opacity - 0.03 } : p)).filter((p) => p.opacity > 0),
      );
    };

    const interval = setInterval(fade, 30);
    return () => clearInterval(interval);
  }, [mousePos, enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998]" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="rounded-full bg-[#90c86a] dark:bg-[#2f7d3c]"
          style={{
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size,
            height: p.size,
            opacity: Math.max(0, p.opacity),
            transition: "opacity 0.15s ease-out",
          }}
        />
      ))}
    </div>
  );
}
