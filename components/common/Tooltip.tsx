"use client";

"use client";

import { useState, type ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rounded-lg bg-[#1f3855] px-2.5 py-1 text-[0.65rem] font-bold text-white shadow-lg dark:bg-[#90c86a] dark:text-[#123423]"
          style={{ whiteSpace: "nowrap", zIndex: 50 }}
        >
          {content}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1f3855] dark:border-t-[#90c86a]" />
        </span>
      )}
    </span>
  );
}
