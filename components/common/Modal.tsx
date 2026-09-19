"use client";

import { useEffect, type ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-3xl",
};

export function Modal({ open, onClose, title, children, size = "md" }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
        <div
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-lg"
          onClick={onClose}
          aria-hidden="true"
        />
      <div className={`relative w-full ${sizeClasses[size]} rounded-2xl bg-white shadow-2xl dark:bg-[#222a24]`}>
        <div className="flex items-center justify-between border-b border-[#e8e2d6] px-5 py-4 dark:border-stone-700">
          <h2 className="text-base font-black uppercase tracking-[-0.02em] text-[#153d30] dark:text-[#c4e0a8]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-full p-1.5 text-slate-500 transition hover:bg-stone-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-stone-800"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
              <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="px-5 py-4">{children}</div>
      </div>
    </div>
  );
}