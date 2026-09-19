import { Suspense } from "react";
import { LoadingStateSkeleton, ProductCardSkeleton } from "../../../components/common/Skeleton";
import { ProductBrowser } from "../components/product-browser";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-[1360px] px-4 py-10 md:px-6 lg:px-8">
          <LoadingStateSkeleton label="Loading products" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      }
    >
      <ProductBrowser />
    </Suspense>
  );
}
