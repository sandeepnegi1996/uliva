"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "../../types/product";
import { ImageZoom } from "./ImageZoom";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-[24px] border border-[#efe8dc] bg-[#f5f0ea] dark:border-stone-700 dark:bg-[#1e2520]">
        <ImageZoom
          src={product.images[activeImage] || product.images[0]}
          alt={`${product.name} - view ${activeImage + 1} of ${product.images.length}`}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-full w-full"
        />
      </div>
      {product.images.length > 1 && (
        <div className="flex gap-3" role="group" aria-label="Product image thumbnails">
          {product.images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`View image ${index + 1}`}
              aria-pressed={index === activeImage}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition hover:opacity-80 ${
                index === activeImage
                  ? "border-[#1f3855] dark:border-[#90c86a]"
                  : "border-stone-200 dark:border-stone-700"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="80px"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
