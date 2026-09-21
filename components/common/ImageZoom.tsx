"use client";

import { useState, useRef, type ReactNode } from "react";
import Image from "next/image";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  blurDataURL?: string;
  onLoadingComplete?: () => void;
}

export function ImageZoom({
  src,
  alt,
  className = "",
  fill,
  sizes,
  priority,
  loading,
  blurDataURL,
  onLoadingComplete,
}: ImageZoomProps) {
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[14px] bg-[#f6f1e9] dark:bg-[#1e2520] ${className}`}
      onMouseEnter={() => setZoomed(true)}
      onMouseLeave={() => setZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <div
        className="relative w-full h-full"
        style={{
          transform: zoomed ? "scale(1.5)" : "scale(1)",
          transformOrigin: `${position.x}% ${position.y}%`,
          transition: zoomed ? "none" : "transform 0.5s ease",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={loading}
          className="object-cover transition-transform duration-500"
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          onLoadingComplete={onLoadingComplete}
        />
      </div>
      {zoomed && (
        <div className="absolute bottom-2 right-2 rounded-full bg-black/40 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
          🔍 Hover to zoom
        </div>
      )}
    </div>
  );
}
