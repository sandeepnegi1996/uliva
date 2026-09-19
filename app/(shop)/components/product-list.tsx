"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "../../../components/common/ProductCard";
import { ProductGrid } from "../../../components/common/ProductGrid";
import { SparkleEffect } from "../../../components/common/SparkleEffect";
import { useCartStore } from "../../../store/cart-store";
import type { Product } from "../../../types/product";

export interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const addItem = useCartStore((s) => s.addItem);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [sparkleActive, setSparkleActive] = useState(false);

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
    setSparkleActive(true);
    setTimeout(() => setSparkleActive(false), 1000);
  };

  return (
    <>
      <ProductGrid ref={ref}>
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className={visible ? "" : "opacity-0"}
          >
            <ProductCard product={product} onAddToCart={() => handleAddToCart(product)} />
          </motion.div>
        ))}
      </ProductGrid>
      {sparkleActive && <SparkleEffect count={12} active={sparkleActive} />}
      <div aria-live="polite" className="sr-only" role="status">
        {`${products.length} products displayed`}
      </div>
    </>
  );
}
