export interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ className = "", variant = "rectangular", width, height }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-stone-200 dark:bg-stone-700";
  const variantClasses = {
    text: "rounded h-4 w-full",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col rounded-[22px] border border-[#e8e2d6] bg-white dark:border-[#3a4535] dark:bg-[#222a24] p-3 shadow-[0_10px_20px_rgba(22,31,29,0.04)]">
      <div className="relative overflow-hidden rounded-[18px] bg-stone-100 dark:bg-[#1e2520] p-3">
        <Skeleton variant="rectangular" className="h-56 w-full" />
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-3">
        <Skeleton variant="text" className="h-3 w-20" />
        <Skeleton variant="text" className="h-6 w-3/4" />
        <div className="flex gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} variant="circular" className="size-4" />
          ))}
        </div>
        <Skeleton variant="text" className="h-5 w-24" />
        <Skeleton variant="rectangular" className="mt-4 h-12 w-full rounded-xl" />
      </div>
    </div>
  );
}

export function LoadingStateSkeleton({ label = "Loading" }: { label?: string }) {
  return (
    <div
      role="status"
      className="flex min-h-24 flex-col items-center justify-center gap-3 py-10"
    >
      <span aria-hidden="true" className="size-8 animate-spin rounded-full border-[3px] border-[#1f3855]/20 border-t-[#1f3855]" />
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#53665c] dark:text-[#8a9a94]">{label}</span>
    </div>
  );
}

export function ImageSkeleton({ className = "" }: { className?: string }) {
  return (
    <span className={`animate-pulse rounded-lg bg-stone-200 dark:bg-stone-700 ${className}`} aria-hidden="true" />
  );
}
