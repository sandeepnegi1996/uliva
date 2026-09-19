"use client";

import { useEffect, useRef, useState } from "react";
import { useCartStore } from "@/store/cart-store";

interface StickyAddToCartProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    sizes: string[];
    colors: string[];
    stock: number;
  };
}

export function StickyAddToCart({ product }: StickyAddToCartProps) {
  const [visible, setVisible] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setVisible(rect.top < 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAdd = () => {
    addItem({
      id: `${product.id}-${product.sizes[0]}-${product.colors[0]}`,
      productId: product.id,
      name: product.name,
      size: product.sizes[0],
      color: product.colors[0],
      quantity: 1,
      price: product.price,
      image: product.images[0],
    });
  };

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-stone-200 bg-white/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.1)] dark:border-stone-700 dark:bg-[#1a1f1a]/95 sm:hidden"
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg">
            <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#153d30] dark:text-[#c4e0a8]">{product.name}</p>
            <p className="text-[0.6rem] font-bold text-[#2f7d3c]">₹{product.price}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          disabled={product.stock === 0}
          className="rounded-xl bg-[#1f3855] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
