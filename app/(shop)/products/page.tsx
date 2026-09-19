import { Suspense } from "react";
import { LoadingState } from "../../../components/common/LoadingState";
import { ProductBrowser } from "../components/product-browser";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-[1360px] px-4 py-10 md:px-6 lg:px-8">
          <LoadingState label="Loading products" />
        </div>
      }
    >
      <ProductBrowser />
    </Suspense>
  );
}