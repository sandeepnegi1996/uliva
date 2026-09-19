import type { Product } from "../../types/product";
import { ProductList } from "../(shop)/components/product-list";

type ProductSectionProps = {
  products: Product[];
};

export function ProductSection({ products }: ProductSectionProps) {
  return (
    <section aria-labelledby="product-heading" className="bg-[#f7f4ef] py-10 md:py-14">
      <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
        <div className="mb-7 flex flex-col items-center text-center md:mb-9">
          <div className="inline-flex items-center gap-2 text-[#1d3a2d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
            <h2 id="product-heading" className="text-[0.72rem] font-black uppercase tracking-[0.22em] md:text-[0.8rem]">
              New arrivals
            </h2>
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
          </div>
          <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#53665c]">
            Discover the comfort you keep reaching for
          </p>
        </div>

        <ProductList products={products} />
      </div>
    </section>
  );
}