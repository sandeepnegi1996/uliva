"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "../../store/cart-store";

type NavItem = {
  label: string;
  href: string;
  gender: string | null;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", gender: null },
  { label: "Men", href: "/products?gender=Men", gender: "Men" },
  { label: "Women", href: "/products?gender=Women", gender: "Women" },
  { label: "All Products", href: "/products", gender: null },
];

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16L21 21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M3 4h2l2.5 9.2h9.5l2.3-7.2H7.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="17.2" r="1.4" fill="currentColor" />
      <circle cx="17" cy="17.2" r="1.4" fill="currentColor" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const genderParam = searchParams.get("gender");

  const itemCount = useCartStore((s) => s.itemCount);
  const hasHydrated = useCartStore((s) => s.hasHydrated);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleCount = hasHydrated ? itemCount : 0;

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    if (item.gender) {
      return pathname === "/products" && genderParam?.toLowerCase() === item.gender.toLowerCase();
    }
    return pathname === "/products" && !genderParam;
  };

  return (
    <>
      <div className="bg-[#90c86a] text-[#123423]">
        <div className="mx-auto flex max-w-[1360px] items-center justify-center gap-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] md:text-[11px]">
          <span>Free shipping on orders over ₹999</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">New arrivals every week</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Uliva home">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#153d30] to-[#2f7d3c] text-2xl font-black italic text-[#d9f39b] shadow-inner shadow-white/20">
              U
            </div>
            <div className="leading-none">
              <div className="text-2xl font-black uppercase tracking-[0.1em] text-[#163d34]">Uliva</div>
              <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.32em] text-[#899a88]">Comfort</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.16em] text-[#1a2d2e] md:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative transition ${
                    active
                      ? "text-[#2f7d3c] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[#2f7d3c]"
                      : "hover:text-[#5ca15f]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 text-[#173f35]">
            <Link
              href="/products"
              aria-label="Search products"
              className="rounded-full border border-stone-200 p-2 transition hover:border-stone-300 hover:bg-stone-100"
            >
              <IconSearch />
            </Link>
            <Link
              href="/cart"
              aria-label={`Cart, ${visibleCount} ${visibleCount === 1 ? "item" : "items"}`}
              className="relative rounded-full border border-stone-200 p-2 transition hover:border-stone-300 hover:bg-stone-100"
            >
              <IconCart />
              {visibleCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#90c86a] px-1 text-[9px] font-bold text-[#123423]">
                  {visibleCount}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="rounded-full border border-stone-200 p-2 transition hover:border-stone-300 hover:bg-stone-100 md:hidden"
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div id="mobile-menu" className="border-t border-stone-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-[1360px] flex-col gap-1 px-4 py-4">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition ${
                      active ? "bg-[#f0c96b] text-[#153d30]" : "text-[#1a2d2e] hover:bg-stone-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/my-orders"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1a2d2e] transition hover:bg-stone-100"
              >
                My Orders
              </Link>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}