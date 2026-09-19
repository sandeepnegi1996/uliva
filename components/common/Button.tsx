"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#1f3855] text-white hover:bg-[#132b45] dark:bg-[#3a5a4a] dark:text-[#e8ede8] dark:hover:bg-[#2a4a3a]",
  secondary: "bg-[#153d30] text-white hover:bg-[#0e2c22] dark:bg-[#2a5a3a] dark:text-[#e8ede8] dark:hover:bg-[#1a4a2a]",
  outline: "border border-stone-300 bg-white text-[#1f3855] hover:border-stone-400 hover:bg-stone-50 dark:border-stone-600 dark:bg-[#222a24] dark:text-[#e8ede8] dark:hover:bg-stone-800",
  ghost: "text-[#1f3855] hover:bg-stone-100 dark:text-[#c4e0a8] dark:hover:bg-stone-800",
  danger: "bg-[#c93a2e] text-white hover:bg-[#a82a20]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", fullWidth = false, loading = false, icon, className = "", children, disabled, ...rest },
  ref,
) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3855]",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ].join(" ");

  return (
    <button ref={ref} className={classes} disabled={disabled || loading} {...rest}>
      {loading && (
        <span
          aria-hidden="true"
          className="size-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
          style={{ borderTopColor: variant === "ghost" || variant === "outline" ? "currentColor" : undefined }}
        />
      )}
      {!loading && icon ? <span className="inline-flex items-center">{icon}</span> : null}
      {children}
    </button>
  );
});
