"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  id: string;
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { id, label, error, options, placeholder, className = "", ...rest },
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
      <select
        id={id}
        ref={ref}
        aria-invalid={hasError || undefined}
        className={`w-full appearance-none rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 ${borderClasses} ${className}`}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hasError ? <p className="mt-1 text-xs font-medium text-[#c93a2e]">{error}</p> : null}
    </div>
  );
});