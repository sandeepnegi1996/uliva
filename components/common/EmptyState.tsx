import type { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, action, className = "" }: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-14 text-center ${className}`}>
      <div className="flex size-14 items-center justify-center rounded-full bg-[#f0efe9] text-[#7a8a84]">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
          <path
            d="M3 7h18M3 12h12M3 17h18v2H3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="mt-4 text-base font-black uppercase tracking-[-0.02em] text-[#153d30]">{title}</h3>
      {description ? <p className="mt-1.5 max-w-sm text-sm text-[#6a7a74]">{description}</p> : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}