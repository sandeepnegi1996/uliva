"use client";

interface StickyAddToCartProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    stock: number;
  };
  visible: boolean;
  onAddToCart: () => void;
}

export function StickyAddToCart({ product, visible, onAddToCart }: StickyAddToCartProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-stone-200 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-lg dark:border-stone-700 dark:bg-[#1a1f1a]/95 sm:hidden">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4">
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
          onClick={onAddToCart}
          disabled={product.stock === 0}
          className="rounded-xl bg-[#1f3855] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}