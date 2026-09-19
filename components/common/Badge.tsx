import type { ReactNode } from "react";

export type BadgeVariant = "sale" | "new" | "out" | "success" | "warning" | "danger" | "neutral";

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  sale: "bg-[#ee7d77] text-white",
  new: "bg-[#f0c96b] text-[#153d30] animate-pulse dark:bg-[#f0c96b] dark:text-[#153d30]",
  out: "bg-stone-200 text-stone-600 dark:bg-stone-700 dark:text-stone-300",
  success: "bg-[#90c86a] text-[#123423] dark:bg-[#90c86a] dark:text-[#123423]",
  warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
  danger: "bg-[#c93a2e] text-white",
  neutral: "bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-300",
};

export function Badge({ variant = "neutral", children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.14em] ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}