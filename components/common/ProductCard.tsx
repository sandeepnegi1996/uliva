"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../types/product";
import { Badge } from "./Badge";
import { Price } from "./Price";

const COLOR_HEX: Record<string, string> = {
  Black: "#222323",
  Brown: "#7a4a2b",
  White: "#f5f3f0",
  Blue: "#3467d6",
  Rose: "#e08aa2",
  Pink: "#f2a9c4",
  Beige: "#d9c6a5",
  Taupe: "#a4937e",
  Olive: "#6b6b3f",
  Gray: "#8f9499",
  Cream: "#f0ead6",
  Sand: "#d8c3a5",
  Coral: "#ff7f67",
  Navy: "#24344d",
  Yellow: "#f2c764",
};

export interface ProductCardProps {
  product: Product;
  href?: string;
  onAddToCart?: () => void;
}

export function ProductCard({ product, href = `/products/${product.slug}`, onAddToCart }: ProductCardProps) {
  const outOfStock = product.stock === 0;

  const badge = product.isNew
    ? { label: "New", variant: "new" as const }
    : product.isSale
      ? { label: "Sale", variant: "sale" as const }
      : { label: "Hot", variant: "neutral" as const };

  return (
    <article className="group flex flex-col rounded-[22px] border border-[#e8e2d6] bg-white dark:border-[#3a4535] dark:bg-[#222a24] p-3 shadow-[0_10px_20px_rgba(22,31,29,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(22,31,29,0.08)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_18px_30px_rgba(0,0,0,0.3)]">
      <div className="relative overflow-hidden rounded-[18px] border border-[#efe8dc] bg-[#f5f0ea] dark:border-[#3a4535] dark:bg-[#1e2520] p-3">
        <span className="absolute left-3 top-3 z-10">
          <Badge variant={outOfStock ? "out" : badge.variant}>
            {outOfStock ? "Out of stock" : badge.label}
          </Badge>
        </span>

        <Link href={href} aria-label={product.name} className="block">
          <div className="relative h-56 overflow-hidden rounded-[14px] bg-[#f6f1e9] dark:bg-[#1e2520]">
            <Image
              src={product.images[0]}
              alt={`${product.name} product`}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A/AB//2Q=="
            />
          </div>
        </Link>
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">{product.category}</p>
        <Link href={href}>
          <h3 className="mt-2 text-[1.25rem] font-black uppercase leading-[1.05] tracking-[-0.06em] text-[#153d30] transition hover:text-[#1f3855] dark:text-[#c4e0a8] dark:hover:text-[#90c86a] font-display">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1.5" aria-label={`Available colours: ${product.colors.join(", ")}`}>
          {product.colors.map((color) => (
            <span
              key={color}
              title={color}
              aria-hidden="true"
              className="size-4 rounded-full border border-stone-300 dark:border-stone-600"
              style={{ backgroundColor: COLOR_HEX[color] ?? "#d6d3d1" }}
            />
          ))}
        </div>

        <div className="mt-3">
          <Price value={product.price} mrp={product.mrp} discount={product.discount} />
        </div>

        <button
          type="button"
          disabled={outOfStock}
          onClick={onAddToCart}
          className={`mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-[0.68rem] font-black uppercase tracking-[0.14em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3855] ${
            outOfStock
              ? "cursor-not-allowed bg-stone-100 text-stone-400 dark:bg-stone-800 dark:text-stone-500"
              : "bg-[#1f3855] text-white hover:bg-[#132b45] active:scale-95 active:bg-[#0d2033]"
          }`}
        >
          {outOfStock ? "Out of stock" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}