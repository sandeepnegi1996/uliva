import { forwardRef, type ReactNode } from "react";

export interface ProductGridProps {
  children: ReactNode;
  className?: string;
}

export const ProductGrid = forwardRef<HTMLDivElement, ProductGridProps>(function ProductGrid(
  { children, className = "" },
  ref,
) {
  return (
    <div ref={ref} className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}>
      {children}
    </div>
  );
});