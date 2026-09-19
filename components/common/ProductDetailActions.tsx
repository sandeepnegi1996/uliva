"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { Modal } from "./Modal";
import { ProductComparison } from "./ProductComparison";
import { SizeGuideModal } from "./SizeGuideModal";

interface ProductDetailActionsProps {
  product: Product;
  products: Product[];
}

export function ProductDetailActions({ product, products }: ProductDetailActionsProps) {
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  const comparisonProducts = [
    product,
    ...products
      .filter((item) => item.id !== product.id)
      .filter((item) => item.category === product.category || item.gender === product.gender)
      .slice(0, 3),
  ];

  return (
    <>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setSizeGuideOpen(true)}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#1f3855] transition hover:bg-stone-100 dark:text-[#90c86a] dark:hover:bg-stone-800"
        >
          📏 Size Guide
        </button>
        <button
          type="button"
          onClick={() => setCompareOpen(true)}
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#1f3855] transition hover:bg-stone-100 dark:text-[#90c86a] dark:hover:bg-stone-800"
        >
          ⚖️ Compare
        </button>
      </div>

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />

      <Modal open={compareOpen} onClose={() => setCompareOpen(false)} title="Compare Products" size="lg">
        <ProductComparison products={comparisonProducts} onClose={() => setCompareOpen(false)} />
      </Modal>
    </>
  );
}