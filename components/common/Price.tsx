"use client";

import { useEffect, useRef, useState } from "react";
import { formatPrice } from "../../utils/format";

export interface PriceProps {
  value: number;
  mrp?: number;
  discount?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-[1.05rem]",
  lg: "text-xl",
};

export function Price({ value, mrp, discount, size = "md", className = "" }: PriceProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (prevValue.current !== value) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setAnimating(false);
        prevValue.current = value;
      }, 200);
      return () => clearTimeout(timer);
    }
    setDisplayValue(value);
  }, [value]);

  const effectiveDiscount =
    discount ?? (mrp && mrp > value ? Math.round(((mrp - value) / mrp) * 100) : 0);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className={`font-black text-[#153d30] dark:text-[#c4e0a8] ${sizeClasses[size]} ${animating ? "animate-count-up" : ""}`} style={animating ? { animation: "fade-in-up 0.3s ease-out" } : undefined}>
        {formatPrice(displayValue)}
      </span>
      {mrp && mrp > value ? (
        <>
          <span className={`font-medium text-[#7a7a72] line-through dark:text-[#6a7a74] ${size === "md" ? "text-[0.8rem]" : sizeClasses[size]}`}>
            {formatPrice(mrp)}
          </span>
          <span className={`font-black text-[#2f7d3c] dark:text-[#90c86a] ${size === "md" ? "text-[0.8rem]" : sizeClasses[size]}`}>
            {effectiveDiscount}% off
          </span>
        </>
      ) : null}
    </div>
  );
}
