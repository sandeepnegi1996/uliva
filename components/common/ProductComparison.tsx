"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { Price } from "./Price";
import { Badge } from "./Badge";

interface ProductComparisonProps {
  products: Product[];
  onClose: () => void;
}

export function ProductComparison({ products, onClose }: ProductComparisonProps) {
  const [selected, setSelected] = useState<string[]>(products.slice(0, 2).map((p) => p.id));

  const toggleCompare = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((p) => p !== id);
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  };

  const comparedProducts = products.filter((p) => selected.includes(p.id));

  const attributes = [
    { label: "Price", key: "price" },
    { label: "MRP", key: "mrp" },
    { label: "Discount", key: "discount" },
    { label: "Sizes", key: "sizes" },
    { label: "Colors", key: "colors" },
    { label: "Stock", key: "stock" },
    { label: "Category", key: "category" },
  ];

  if (comparedProducts.length < 2) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-[#53665c] dark:text-[#8a9a94]">Select at least 2 products to compare</p>
        <button type="button" onClick={onClose} className="mt-4 rounded-lg bg-[#1f3855] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#132b45]">
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-left text-xs">
          <thead>
            <tr className="border-b border-stone-200 dark:border-stone-700">
              <th className="px-3 py-3 font-bold text-[#153d30] dark:text-[#c4e0a8]">Feature</th>
              {comparedProducts.map((product) => (
                <th key={product.id} className="px-3 py-3 text-center font-bold text-[#153d30] dark:text-[#c4e0a8]">
                  <div className="flex flex-col items-center gap-1">
                    <span>{product.name}</span>
                    <Image
                      src={product.images[0]}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attributes.map((attr) => (
              <tr key={attr.key} className="border-b border-stone-100 dark:border-stone-700/50">
                <td className="px-3 py-2.5 font-medium text-[#53665c] dark:text-[#8a9a94]">{attr.label}</td>
                {comparedProducts.map((product) => (
                  <td key={product.id} className="px-3 py-2.5 text-center text-[#1a2d2e] dark:text-[#e8ede8]">
                    {attr.key === "sizes" ? product.sizes.join(", ") :
                     attr.key === "colors" ? product.colors.join(", ") :
                     attr.key === "price" ? <Price value={product.price} size="sm" /> :
                     attr.key === "discount" ? `${product.discount}%` :
                     attr.key === "stock" ? (product.stock > 0 ? `${product.stock} left` : "Out of stock") :
                     product[attr.key as keyof Product] as string}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2">
        {products.map((product) => (
          <button
            key={product.id}
            type="button"
            onClick={() => toggleCompare(product.id)}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              selected.includes(product.id)
                ? "bg-[#1f3855] text-white"
                : "border border-stone-300 bg-white text-[#3f514a] dark:border-stone-600 dark:bg-[#222a24] dark:text-[#8a9a94]"
            }`}
          >
            {selected.includes(product.id) ? "✓ " : ""}{product.name}
          </button>
        ))}
      </div>
    </div>
  );
}
