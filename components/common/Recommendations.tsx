"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import { Price } from "./Price";
import { Badge } from "./Badge";

interface RecommendationsProps {
  products: Product[];
  currentProductId: string;
  title?: string;
}

export function Recommendations({ products, currentProductId, title = "You Might Also Like" }: RecommendationsProps) {
  const recommended = useMemo(() => {
    const current = products.find((p) => p.id === currentProductId);
    if (!current) return products.slice(0, 4);

    return products
      .filter((p) => p.id !== currentProductId)
      .filter(
        (p) =>
          p.category === current.category ||
          p.gender === current.gender ||
          p.colors.some((c) => current.colors.includes(c)),
      )
      .slice(0, 4)
      .sort(() => Math.random() - 0.5);
  }, [products, currentProductId]);

  if (recommended.length === 0) return null;

  return (
    <section className="bg-[#f7f4ef] dark:bg-[#1a1f1a] py-10 md:py-14">
      <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
        <div className="mb-7 flex flex-col items-center text-center md:mb-9">
          <div className="inline-flex items-center gap-2 text-[#1d3a2d] dark:text-[#c4e0a8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
            <h2 className="text-[0.72rem] font-black uppercase tracking-[0.22em] md:text-[0.8rem] font-display">
              {title}
            </h2>
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
          </div>
          <p className="mt-2 max-w-prose text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#53665c] dark:text-[#8a9a94]">
            Based on your interest, here are more picks
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recommended.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <article className="group flex flex-col overflow-hidden rounded-[22px] border border-[#e8e2d6] bg-white dark:border-[#3a4535] dark:bg-[#222a24] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(22,31,29,0.08)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_18px_30px_rgba(0,0,0,0.3)]">
                <div className="relative h-48 overflow-hidden bg-[#f5f0ea] dark:bg-[#1e2520]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 z-10">
                    <Badge variant={product.isNew ? "new" : product.isSale ? "sale" : "neutral"}>
                      {product.isNew ? "New" : product.isSale ? "Sale" : "Hot"}
                    </Badge>
                  </span>
                </div>
                <div className="mt-3 p-3">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">{product.category}</p>
                  <h3 className="mt-1 text-[1rem] font-black uppercase leading-[1.05] tracking-[-0.04em] text-[#153d30] dark:text-[#c4e0a8] font-display group-hover:text-[#1f3855]">
                    {product.name}
                  </h3>
                  <div className="mt-2">
                    <Price value={product.price} mrp={product.mrp} discount={product.discount} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
