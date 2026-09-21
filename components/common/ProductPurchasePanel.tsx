"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/product";
import { COLOR_HEX } from "./ProductCard";
import { ProductDetailActions } from "./ProductDetailActions";
import { StickyAddToCart } from "./StickyAddToCart";

interface ProductPurchasePanelProps {
  product: Product;
  products: Product[];
}

export function ProductPurchasePanel({ product, products }: ProductPurchasePanelProps) {
  const router = useRouter();
  const addItem = useCartStore((s) => s.addItem);
  const setIsCartOpen = useCartStore((s) => s.setIsCartOpen);

  const outOfStock = product.stock === 0;
  const needsSize = product.sizes.length > 1;
  const needsColor = product.colors.length > 1;
  const maxQuantity = Math.max(1, Math.min(product.stock, 10));

  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors.length === 1 ? product.colors[0] : null,
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState<string | null>(null);
  const [colorError, setColorError] = useState<string | null>(null);

  const actionsRef = useRef<HTMLDivElement>(null);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const el = actionsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickyVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const nextSizeError = needsSize && !selectedSize ? "Please select a size to continue." : null;
    const nextColorError = needsColor && !selectedColor ? "Please select a colour to continue." : null;
    setSizeError(nextSizeError);
    setColorError(nextColorError);
    return !nextSizeError && !nextColorError;
  };

  const handleAddToCart = () => {
    if (outOfStock || !validate()) return;
    addItem({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      productId: product.id,
      name: product.name,
      size: selectedSize!,
      color: selectedColor!,
      quantity,
      price: product.price,
      image: product.images[0],
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    if (outOfStock || !validate()) return;
    addItem({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      productId: product.id,
      name: product.name,
      size: selectedSize!,
      color: selectedColor!,
      quantity,
      price: product.price,
      image: product.images[0],
    });
    router.push("/checkout");
  };

  const features = [
    `${product.colors.length} colourway${product.colors.length === 1 ? "" : "s"} available`,
    `${product.sizes.length} size option${product.sizes.length === 1 ? "" : "s"}`,
    product.isNew ? "Fresh new arrival this season" : "Best-selling daily comfort pick",
    product.isSale && product.discount ? `${product.discount}% off on this piece` : "Regular price pick",
    "Free shipping on orders above ₹999",
    "Easy 7-day returns",
  ];

  const errorClass = "rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-xs font-medium text-red-600 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400";

  return (
    <>
      <div ref={actionsRef} className="mt-5 space-y-5">
        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">
            Colour
          </p>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Select colour">
            {product.colors.map((color) => {
              const active = selectedColor === color;
              return (
                <button
                  key={color}
                  type="button"
                  onClick={() => {
                    setSelectedColor(color);
                    setColorError(null);
                  }}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3855] ${
                    active
                      ? "border-[#1f3855] bg-[#1f3855] text-white dark:border-[#90c86a] dark:bg-[#90c86a]/15 dark:text-[#c4e0a8]"
                      : "border-stone-300 bg-white text-[#1a2d2e] hover:border-stone-400 dark:border-stone-600 dark:bg-[#222a24] dark:text-[#e8ede8] dark:hover:border-stone-500"
                  }`}
                >
                  <span
                    className="size-3.5 rounded-full border border-stone-300 dark:border-stone-500"
                    style={{ backgroundColor: COLOR_HEX[color] ?? "#d6d3d1" }}
                    aria-hidden="true"
                  />
                  {color}
                </button>
              );
            })}
          </div>
          {colorError && <p className={`mt-2 ${errorClass}`} role="alert">{colorError}</p>}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">
              Size
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Select size">
            {product.sizes.map((size) => {
              const active = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setSelectedSize(size);
                    setSizeError(null);
                  }}
                  aria-pressed={active}
                  className={`min-w-12 rounded-xl border px-3 py-2 text-xs font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3855] ${
                    active
                      ? "border-[#1f3855] bg-[#1f3855] text-white dark:border-[#90c86a] dark:bg-[#90c86a]/15 dark:text-[#c4e0a8]"
                      : "border-stone-300 bg-white text-[#1a2d2e] hover:border-stone-400 dark:border-stone-600 dark:bg-[#222a24] dark:text-[#e8ede8] dark:hover:border-stone-500"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
          {sizeError && <p className={`mt-2 ${errorClass}`} role="alert">{sizeError}</p>}
        </div>

        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">
            Quantity
          </p>
          <div className="mt-2 inline-flex items-center gap-1 rounded-xl border border-stone-300 bg-white dark:border-stone-600 dark:bg-[#222a24]">
            <button
              type="button"
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              disabled={outOfStock || quantity <= 1}
              aria-label="Decrease quantity"
              className="rounded-l-xl px-4 py-2 text-base font-bold text-[#1f3855] transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-[#90c86a] dark:hover:bg-stone-800"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-bold text-[#153d30] dark:text-[#c4e0a8]" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((value) => Math.min(maxQuantity, value + 1))}
              disabled={outOfStock || quantity >= maxQuantity}
              aria-label="Increase quantity"
              className="rounded-r-xl px-4 py-2 text-base font-bold text-[#1f3855] transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-[#90c86a] dark:hover:bg-stone-800"
            >
              +
            </button>
          </div>
          {product.stock <= 5 && product.stock > 0 && (
            <p className="mt-2 text-[0.68rem] font-semibold text-[#b3761f] dark:text-[#e0a84c]">
              Only {product.stock} left in stock
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={outOfStock}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#1f3855] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3855] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:flex-1 dark:bg-[#3a5a4a] dark:hover:bg-[#2a4a3a]"
          >
            {outOfStock ? "Out of stock" : "Add to Cart"}
          </button>
          <button
            type="button"
            onClick={handleBuyNow}
            disabled={outOfStock}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#2f7d3c] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#256a31] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7d3c] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto dark:hover:bg-[#90c86a] dark:hover:text-[#153d30]"
          >
            Buy Now
          </button>
        </div>
        {outOfStock && (
          <p className="rounded-xl bg-stone-100 px-4 py-3 text-xs font-semibold text-stone-500 dark:bg-stone-800 dark:text-stone-400" role="status">
            This product is currently out of stock and cannot be purchased.
          </p>
        )}

        <ul className="grid gap-2 rounded-2xl border border-[#e6dfd1] bg-[#f7f4ef] p-4 sm:grid-cols-2 dark:border-stone-700 dark:bg-[#1e2520]">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-[0.72rem] font-medium text-[#53665c] dark:text-[#8a9a94]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-[#2f7d3c] dark:text-[#90c86a]">
                <path d="M5 12l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <ProductDetailActions product={product} products={products} />
      <StickyAddToCart product={product} visible={stickyVisible} onAddToCart={handleAddToCart} />
    </>
  );
}