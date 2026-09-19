import { LoadingStateSkeleton } from "./Skeleton";

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
      <LoadingStateSkeleton label={label} />
    </div>
  );
}