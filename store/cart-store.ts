import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CartLineItem, CartState } from "../types/cart";

interface CartStore extends CartState {
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  addItem: (item: CartLineItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      subtotal: 0,
      itemCount: 0,
      hasHydrated: false,
      isCartOpen: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
      setIsCartOpen: (value) => set({ isCartOpen: value }),
      addItem: (item) => {
        const existingItem = get().items.find(
          (current) =>
            current.productId === item.productId &&
            current.size === item.size &&
            current.color === item.color,
        );

        if (existingItem) {
          set({
            items: get().items.map((current) =>
              current.id === existingItem.id
                ? { ...current, quantity: current.quantity + item.quantity }
                : current,
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }

        const nextItems = get().items;
        const subtotal = nextItems.reduce((sum, current) => sum + current.price * current.quantity, 0);
        const itemCount = nextItems.reduce((sum, current) => sum + current.quantity, 0);

        set({ subtotal, itemCount });
      },
      removeItem: (id) => {
        const nextItems = get().items.filter((item) => item.id !== id);
        set({
          items: nextItems,
          subtotal: nextItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          itemCount: nextItems.reduce((sum, item) => sum + item.quantity, 0),
        });
      },
      updateQuantity: (id, delta) => {
        const nextItems = get().items
          .map((item) =>
            item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
          )
          .filter((item) => item.quantity > 0);

        set({
          items: nextItems,
          subtotal: nextItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          itemCount: nextItems.reduce((sum, item) => sum + item.quantity, 0),
        });
      },
      clear: () => set({ items: [], subtotal: 0, itemCount: 0, isCartOpen: false }),
    }),
    {
      name: "uliva-cart-storage",
      onRehydrateStorage: (state) => () => state.setHasHydrated(true),
    },
  ),
);
