"use client";

import { useState, type FormEvent } from "react";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, onSearch, placeholder = "Search products", className = "" }: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const [animateClear, setAnimateClear] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.(value);
  };

  const handleClear = () => {
    setAnimateClear(true);
    onChange("");
    setTimeout(() => setAnimateClear(false), 300);
  };

  return (
    <form onSubmit={handleSubmit} role="search" className={`relative w-full ${className}`}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
      >
        <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 16L21 21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        aria-label={placeholder}
        className={`w-full rounded-xl border bg-white py-2.5 pl-10 pr-9 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-300 focus:border-[#1f3855] focus:outline-none focus:ring-2 focus:ring-[#1f3855]/30 ${
          focused ? "border-[#1f3855] shadow-md ring-2 ring-[#1f3855]/20" : "border-stone-300"
        } dark:border-stone-600 dark:bg-[#222a24] dark:text-[#e8ede8] ${
          animateClear ? "scale-[0.97] opacity-80" : ""
        }`}
      />
      {value ? (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-all duration-200 hover:text-slate-700 hover:scale-110 hover:bg-stone-100 dark:hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3855] focus-visible:ring-2"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      ) : null}
    </form>
  );
}
