"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { EmptyState } from "../../../components/common/EmptyState";
import { SearchBar } from "../../../components/common/SearchBar";
import { products } from "../../../data/products";
import { ProductList } from "./product-list";

type PriceRange = "under-2000" | "2000-3000" | "above-3000";
type Availability = "in-stock" | "out-of-stock";

const PRICE_OPTIONS: { value: PriceRange; label: string; test: (price: number) => boolean }[] = [
  { value: "under-2000", label: "Under ₹2,000", test: (price) => price < 2000 },
  { value: "2000-3000", label: "₹2,000–₹3,000", test: (price) => price >= 2000 && price <= 3000 },
  { value: "above-3000", label: "Above ₹3,000", test: (price) => price > 3000 },
];

const AVAILABILITY_OPTIONS: { value: Availability; label: string; test: (stock: number) => boolean }[] = [
  { value: "in-stock", label: "In Stock", test: (stock) => stock > 0 },
  { value: "out-of-stock", label: "Out of Stock", test: (stock) => stock === 0 },
];

const CATEGORY_OPTIONS = ["All", ...Array.from(new Set(products.map((product) => product.gender)))];
const SIZE_OPTIONS = Array.from(new Set(products.flatMap((product) => product.sizes)));
const COLOR_OPTIONS = Array.from(new Set(products.flatMap((product) => product.colors)));

const capitalize = (value: string) => `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
        active
          ? "border-[#1f3855] bg-[#1f3855] text-white"
          : "border-stone-300 bg-white text-[#3f514a] hover:border-stone-400 hover:bg-stone-50 dark:border-stone-600 dark:bg-[#222a24] dark:text-[#8a9a94] dark:hover:bg-stone-800"
      }`}
    >
      {children}
    </button>
  );
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="border-t border-stone-200 pt-4 first:border-t-0 first:pt-0 dark:border-stone-700">
      <legend className="mb-2.5 text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#153d30] dark:text-[#c4e0a8]">{title}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

export function ProductBrowser() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlGender = searchParams.get("gender");
  const category = urlGender ? urlGender.toLowerCase() : "all";

  const [query, setQuery] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [price, setPrice] = useState<PriceRange | null>(null);
  const [availability, setAvailability] = useState<Availability | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const selectCategory = (value: string) => {
    if (value === "all") {
      router.replace("/products");
    } else {
      router.replace(`/products?gender=${capitalize(value)}`);
    }
  };

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        if (category !== "all" && product.gender.toLowerCase() !== category) return false;
        if (sizes.length > 0 && !sizes.some((size) => product.sizes.includes(size))) return false;
        if (colors.length > 0 && !colors.some((color) => product.colors.includes(color))) return false;
        const priceOption = PRICE_OPTIONS.find((option) => option.value === price);
        if (priceOption && !priceOption.test(product.price)) return false;
        const availabilityOption = AVAILABILITY_OPTIONS.find((option) => option.value === availability);
        if (availabilityOption && !availabilityOption.test(product.stock)) return false;
        if (normalizedQuery) {
          const haystack = [product.name, product.category, product.description, ...product.colors]
            .join(" ")
            .toLowerCase();
          if (!haystack.includes(normalizedQuery)) return false;
        }
        return true;
      }),
    [category, sizes, colors, price, availability, normalizedQuery],
  );

  const activeFilterCount =
    (category !== "all" ? 1 : 0) + sizes.length + colors.length + (price ? 1 : 0) + (availability ? 1 : 0);
  const hasSearch = normalizedQuery.length > 0;
  const hasActiveFilters = activeFilterCount > 0;

  const clearAll = () => {
    setQuery("");
    router.replace("/products");
    setSizes([]);
    setColors([]);
    setPrice(null);
    setAvailability(null);
  };

  const toggleSize = (size: string) =>
    setSizes((prev) => (prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]));

  const toggleColor = (color: string) =>
    setColors((prev) => (prev.includes(color) ? prev.filter((item) => item !== color) : [...prev, color]));

  const title = category !== "all" ? `${capitalize(category)} Products` : "All Products";

  return (
    <section className="mx-auto w-full max-w-[1360px] px-4 py-10 md:px-6 lg:px-8">
      <header className="mb-6">
        <div className="inline-flex items-center gap-2 text-[#1d3a2d] dark:text-[#c4e0a8]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
          <h1 className="text-[0.8rem] font-black uppercase tracking-[0.22em]">{title}</h1>
          <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#53665c] dark:text-[#8a9a94]">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
          {hasSearch || hasActiveFilters ? (
            <button
              type="button"
              onClick={clearAll}
              className="text-xs font-bold uppercase tracking-[0.14em] text-[#1f3855] transition hover:text-[#132b45] hover:underline dark:text-[#90c86a]"
            >
              Clear all
            </button>
          ) : null}
        </div>
      </header>

      <div className="mb-8">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search by name, category, colour or description"
        />
      </div>

      <div className="lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        <aside className="mb-6 lg:mb-0">
          <div className="mb-3 lg:hidden">
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-[#1f3855] transition hover:border-stone-400 dark:border-stone-600 dark:bg-[#222a24] dark:text-[#c4e0a8]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
                <path
                  d="M4 6h16M7 12h10M10 18h4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              Filters
              {hasActiveFilters ? (
                <span className="flex size-5 items-center justify-center rounded-full bg-[#1f3855] text-[10px] font-bold text-white">
                  {activeFilterCount}
                </span>
              ) : null}
            </button>
          </div>

          <div className={filtersOpen ? "block" : "hidden lg:block"}>
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_10px_20px_rgba(22,31,29,0.04)] dark:border-stone-700 dark:bg-[#222a24]">
              <div className="flex flex-col gap-5">
                <FilterGroup title="Category">
                  {CATEGORY_OPTIONS.map((option) => {
                    const value = option === "All" ? "all" : option.toLowerCase();
                    return (
                      <FilterChip key={option} active={category === value} onClick={() => selectCategory(value)}>
                        {option}
                      </FilterChip>
                    );
                  })}
                </FilterGroup>

                <FilterGroup title="Size">
                  {SIZE_OPTIONS.map((size) => (
                    <FilterChip key={size} active={sizes.includes(size)} onClick={() => toggleSize(size)}>
                      {size}
                    </FilterChip>
                  ))}
                </FilterGroup>

                <FilterGroup title="Colour">
                  {COLOR_OPTIONS.map((color) => (
                    <FilterChip key={color} active={colors.includes(color)} onClick={() => toggleColor(color)}>
                      {color}
                    </FilterChip>
                  ))}
                </FilterGroup>

                <FilterGroup title="Price">
                  {PRICE_OPTIONS.map((option) => (
                    <FilterChip
                      key={option.value}
                      active={price === option.value}
                      onClick={() => setPrice((prev) => (prev === option.value ? null : option.value))}
                    >
                      {option.label}
                    </FilterChip>
                  ))}
                </FilterGroup>

                <FilterGroup title="Availability">
                  {AVAILABILITY_OPTIONS.map((option) => (
                    <FilterChip
                      key={option.value}
                      active={availability === option.value}
                      onClick={() => setAvailability((prev) => (prev === option.value ? null : option.value))}
                    >
                      {option.label}
                    </FilterChip>
                  ))}
                </FilterGroup>
              </div>
            </div>
          </div>
        </aside>

        <div>
          {filtered.length > 0 ? (
            <ProductList products={filtered} />
          ) : (
            <EmptyState
              title="No products found"
              description="Try a different search term or clear some filters to see more products."
              action={
                <button
                  type="button"
                  onClick={clearAll}
                  className="inline-flex items-center justify-center rounded-xl bg-[#1f3855] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45]"
                >
                  Clear search & filters
                </button>
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}