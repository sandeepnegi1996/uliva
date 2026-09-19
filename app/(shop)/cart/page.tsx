"use client";

import Image from "next/image";
import Link from "next/link";
import { EmptyState } from "../../../components/common/EmptyState";
import { useCartStore } from "../../../store/cart-store";
import { formatPrice } from "../../../utils/format";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal);
  const itemCount = useCartStore((s) => s.itemCount);
  const hasHydrated = useCartStore((s) => s.hasHydrated);

  if (!hasHydrated) {
    return (
      <section className="mx-auto w-full max-w-[1360px] px-4 py-10 md:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-black uppercase tracking-[-0.05em] text-[#153d30] dark:text-[#c4e0a8]">Cart</h1>
        <div className="h-64 rounded-2xl border border-dashed border-stone-300 bg-white dark:border-stone-700 dark:bg-[#222a24]" />
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-[1360px] px-4 py-10 md:px-6 lg:px-8">
      <h1 className="text-3xl font-black uppercase tracking-[-0.05em] text-[#153d30] dark:text-[#c4e0a8]">
        Cart {itemCount > 0 ? `(${itemCount})` : ""}
      </h1>

      {items.length === 0 ? (
        <div className="mt-8 max-w-lg">
          <EmptyState
            title="Your cart is empty"
            description="Browse the collection and add a few comfort favourites."
            action={
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl bg-[#1f3855] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45]"
              >
                Start shopping
              </Link>
            }
          />
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 rounded-2xl border border-[#e8e2d6] bg-white p-4 dark:border-stone-700 dark:bg-[#222a24]">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#f5f0ea] dark:bg-[#1e2520]">
                  <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                </div>
                <div className="flex flex-1 items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#153d30] dark:text-[#c4e0a8]">{item.name}</p>
                    <p className="mt-1 text-[0.7rem] font-medium text-[#6a7a74] dark:text-[#8a9a94]">
                      Size {item.size} · {item.color} · Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-black text-[#153d30] dark:text-[#c4e0a8]">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-2xl border border-[#e8e2d6] bg-white p-5 dark:border-stone-700 dark:bg-[#222a24]">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">Subtotal</p>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-lg font-black text-[#153d30] dark:text-[#c4e0a8]">{formatPrice(subtotal)}</span>
              <span className="text-xs font-medium text-[#6a7a74] dark:text-[#8a9a94]">{itemCount} items</span>
            </div>
            <Link
              href="/checkout"
              className="mt-5 block w-full rounded-xl bg-[#1f3855] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45]"
            >
              Proceed to checkout
            </Link>
            <Link
              href="/products"
              className="mt-3 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-[#1f3855] transition hover:bg-stone-50 dark:border-stone-600 dark:bg-[#222a24] dark:text-[#c4e0a8]"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}