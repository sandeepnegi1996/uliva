import { motion } from "framer-motion";
import type { Product } from "../../types/product";
import { ProductList } from "../(shop)/components/product-list";

type ProductSectionProps = {
  products: Product[];
};

export function ProductSection({ products }: ProductSectionProps) {
  return (
    <motion.section
      aria-labelledby="product-heading"
      className="bg-[#f7f4ef] dark:bg-[#1a1f1a] py-10 md:py-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
        <motion.div
          className="mb-7 flex flex-col items-center text-center md:mb-9"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 text-[#1d3a2d] dark:text-[#c4e0a8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
            <h2 id="product-heading" className="text-[0.72rem] font-black uppercase tracking-[0.22em] md:text-[0.8rem] font-display">
              New arrivals
            </h2>
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
          </div>
          <p className="mt-2 max-w-prose text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#53665c] dark:text-[#8a9a94]">
            Discover the comfort you keep reaching for
          </p>
        </motion.div>

        <ProductList products={products} />
      </div>
    </motion.section>
  );
}
