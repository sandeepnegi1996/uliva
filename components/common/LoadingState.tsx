export interface LoadingStateProps {
  label?: string;
  className?: string;
}

export function LoadingState({ label = "Loading", className = "" }: LoadingStateProps) {
  return (
    <div
      role="status"
      className={`flex min-h-24 flex-col items-center justify-center gap-3 py-10 ${className}`}
    >
      <span
        aria-hidden="true"
        className="size-8 animate-spin rounded-full border-[3px] border-[#1f3855]/20 border-t-[#1f3855]"
      />
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#53665c] dark:text-[#8a9a94]">{label}</span>
    </div>
  );
}