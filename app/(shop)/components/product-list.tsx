"use client";

import { useEffect, useRef, useState } from "react";
import { ProductCard } from "../../../components/common/ProductCard";
import { ProductGrid } from "../../../components/common/ProductGrid";
import { useCartStore } from "../../../store/cart-store";
import type { Product } from "../../../types/product";

export interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const addItem = useCartStore((s) => s.addItem);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleAddToCart = (product: Product) => {
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

  return (
    <ProductGrid ref={ref}>
      {products.map((product, i) => (
        <div
          key={product.id}
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <ProductCard product={product} onAddToCart={() => handleAddToCart(product)} />
        </div>
      ))}
    </ProductGrid>
  );
}