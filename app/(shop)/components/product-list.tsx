"use client";

import { ProductCard } from "../../../components/common/ProductCard";
import { ProductGrid } from "../../../components/common/ProductGrid";
import { useCartStore } from "../../../store/cart-store";
import type { Product } from "../../../types/product";

export interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const addItem = useCartStore((s) => s.addItem);

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
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
      ))}
    </ProductGrid>
  );
}