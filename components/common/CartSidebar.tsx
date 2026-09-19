"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "../../store/cart-store";
import { formatPrice } from "../../utils/format";
import { motion, AnimatePresence } from "framer-motion";

export function CartSidebar() {
  const isOpen = useCartStore((s) => s.isCartOpen);
  const setIsOpen = useCartStore((s) => s.setIsCartOpen);
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal);
  const itemCount = useCartStore((s) => s.itemCount);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const clear = useCartStore((s) => s.clear);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl dark:bg-[#222a24]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4 dark:border-stone-700">
                <h2 className="text-lg font-black uppercase tracking-[-0.03em] text-[#153d30] dark:text-[#c4e0a8] font-display">
                  Cart ({itemCount})
                </h2>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close cart"
                  className="rounded-full p-1.5 text-slate-500 transition hover:bg-stone-100 hover:text-slate-800 dark:hover:bg-stone-800 dark:text-slate-400"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
                    <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="mb-4 size-12 text-stone-300 dark:text-stone-600">
                      <path d="M3 4h2l2.5 9.2h9.5l2.3-7.2H7.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="10" cy="17.2" r="1.4" fill="currentColor" />
                      <circle cx="17" cy="17.2" r="1.4" fill="currentColor" />
                    </svg>
                    <p className="text-sm font-medium text-stone-400 dark:text-stone-500">Your cart is empty</p>
                    <p className="mt-1 text-xs text-stone-300 dark:text-stone-600">Browse the collection and add items</p>
                  </div>
                ) : (
                  <ul className="space-y-4" aria-label="Cart items">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-4 rounded-xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-[#1e2520]">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white dark:bg-[#222a24]">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#153d30] dark:text-[#c4e0a8]">{item.name}</p>
                            <p className="mt-0.5 text-[0.68rem] font-medium text-[#6a7a74] dark:text-[#8a9a94]">
                              Size {item.size} · {item.color}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, -1)}
                                aria-label={`Decrease quantity of ${item.name}`}
                                className="rounded-full border border-stone-300 px-2 py-0.5 text-xs font-bold transition hover:border-stone-400 dark:border-stone-600"
                              >
                                −
                              </button>
                              <span className="w-6 text-center text-xs font-bold text-[#153d30] dark:text-[#c4e0a8]" aria-live="polite">{item.quantity}</span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, 1)}
                                aria-label={`Increase quantity of ${item.name}`}
                                className="rounded-full border border-stone-300 px-2 py-0.5 text-xs font-bold transition hover:border-stone-400 dark:border-stone-600"
                              >
                                +
                              </button>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <span className="text-sm font-black text-[#153d30] dark:text-[#c4e0a8]">{formatPrice(item.price * item.quantity)}</span>
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                aria-label={`Remove ${item.name} from cart`}
                                className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-red-400 transition hover:text-red-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-stone-200 bg-white p-6 dark:border-stone-700 dark:bg-[#222a24]">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold uppercase tracking-[0.1em] text-[#53665c] dark:text-[#8a9a94]">Subtotal</span>
                    <span className="text-lg font-black text-[#153d30] dark:text-[#c4e0a8]">{formatPrice(subtotal)}</span>
                  </div>
                  <Link
                    href="/checkout"
                    className="mt-4 block w-full rounded-xl bg-[#1f3855] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45]"
                    onClick={() => setIsOpen(false)}
                  >
                    Proceed to checkout
                  </Link>
                  <button
                    type="button"
                    onClick={() => clear()}
                    className="mt-3 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-[#1f3855] transition hover:bg-stone-50 dark:border-stone-600 dark:bg-[#222a24] dark:text-[#c4e0a8]"
                  >
                    Clear cart
                  </button>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
