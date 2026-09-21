"use client";

import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const setIsCartOpen = useCartStore((s) => s.setIsCartOpen);
  const outOfStock = product.stock === 0;

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
    setIsCartOpen(true);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={outOfStock}
      className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#1f3855] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto dark:bg-[#3a5a4a]"
    >
      {outOfStock ? "Out of stock" : "Add to Cart"}
    </button>
  );
}