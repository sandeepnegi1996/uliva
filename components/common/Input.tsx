"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: string;
}

const baseClasses =
  "w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, error, className = "", ...rest },
  ref,
) {
  const hasError = Boolean(error);
  const borderClasses = hasError
    ? "border-[#c93a2e] focus:border-[#c93a2e] focus:ring-[#c93a2e]/30"
    : "border-stone-300 focus:border-[#1f3855] focus:ring-[#1f3855]/30";

  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={id} className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#53665c]">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        ref={ref}
        aria-invalid={hasError || undefined}
        className={`${baseClasses} ${borderClasses} ${className}`}
        {...rest}
      />
      {hasError ? <p className="mt-1 text-xs font-medium text-[#c93a2e]">{error}</p> : null}
    </div>
  );
});