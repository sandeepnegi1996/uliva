# UI Enhancement Roadmap — Uliva

## ✅ Completed (Quick Wins)

| # | Task | Status |
|---|------|--------|
| 1 | `backdrop-blur-md` + `bg-white/80` on header | Done |
| 2 | `scroll-margin-top: 80px` on all section anchors | Done |
| 3 | `animate-pulse` on "New" badge | Done |
| 4 | Staggered fade-in animation for product cards on scroll (IntersectionObserver) | Done |
| 5 | `prefers-reduced-motion` support | Done |
| 6 | Image blur placeholder on ProductCard | Done |

---

## ✅ Completed — Tier 1 (High Impact)

### Typography & Spacing
- [x] Use `font-display` for headings to leverage Geist's full character set (added `display: "swap"` to Geist font config in `app/layout.tsx` and `.font-display` class in `app/globals.css`)
- [x] Increase body `line-height` to `1.6` for better readability (updated `body` rule in `app/globals.css`)
- [x] Add `max-w-prose` to content sections (added to ProductSection, CategorySection, product detail page)
- [x] Define consistent `border-radius` tokens (use `--radius-*` CSS variables) (added `--radius-sm` through `--radius-full` to `:root` in `app/globals.css`)

### Dark Mode
- [x] Implement dark mode toggle using CSS `data-theme` attribute (created `components/common/ThemeToggle.tsx`, integrated into `components/layout/header.tsx`)
- [x] Invert colors: `#1a2b2e` → `#e8ede8` for text, `#f7f4ef` → `#1a1f1a` for background (added `[data-theme="dark"]` selectors in `app/globals.css`)
- [x] Use Tailwind `dark:` prefix throughout all components (added `dark:` prefixes to header, footer, ProductCard, Modal, Button, Badge, Price, SearchBar, Input, Select, EmptyState, product-browser, product-section, category-section, cart page, my-orders pages, and more)

### Visual Depth & Atmosphere
- [x] Add subtle background gradient or noise texture instead of flat `#f7f4ef` (added `body::before` noise texture overlay and `body::after` gradient overlay in `app/globals.css`)
- [x] Increase `backdrop-blur` to `backdrop-blur-lg` on modal overlays (updated `components/common/Modal.tsx`)
- [x] Add consistent box-shadow depth tokens (`shadow-sm`, `shadow-md`, `shadow-lg`) (added `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl` CSS variables to `:root` in `app/globals.css`)
- [x] Implement parallax or scroll-based transform on hero shoe image (created `HeroParallaxImage` component in `app/(shop)/page.tsx` with scroll-based `translateY` transform)
- [x] Add radial gradient glow behind hero section (added `.hero-glow::before` with radial gradient in `app/globals.css`, applied `hero-glow` class to hero section)

---

## ✅ Completed — Tier 1 (Micro-interactions & Motion)

### Micro-interactions & Motion
- [x] Add `@keyframe` shimmer/pulse animation to "New" badge (subtle glow) — added `shimmer-badge` CSS class with `@keyframes shimmer` in `app/globals.css`
- [x] Add image hover `blur-to-sharp` transition (currently only scale) — added `blur-to-sharp` via `group-hover:blur-0` and `blur-sm` on initial load in `ProductCard.tsx`
- [x] Add `cursor:pointer` visual feedback on all clickable areas — added `cursor-pointer` to color swatches and wishlist button in `ProductCard.tsx`
- [x] Add `fade-in-up` entrance animation using `framer-motion` for sections — added `fade-in-up` `@keyframes` in `app/globals.css`, integrated `motion` components in `product-section.tsx`, `category-section.tsx`, `product-list.tsx`
- [x] Add confetti or sparkle effect when item is added to cart — created `SparkleEffect` component and integrated in `product-list.tsx`

### Component-Level Enhancements
- [x] **ProductCard**: Add quick-view overlay (eye icon) on hover — added eye icon button with `group-hover:opacity-100` in `ProductCard.tsx`
- [x] **ProductCard**: Add "Wishlist" heart icon toggle — added wishlist toggle button with heart icon in `ProductCard.tsx`
- [x] **ProductCard**: Add tooltip on color swatches showing color name — added `title` attribute on color swatches in `ProductCard.tsx`
- [x] **Badge**: Add subtle `animate-pulse` glow effect on "Hot" badges — added `glow-pulse` CSS class and `shimmer-badge` for "New" badge in `Badge.tsx`
- [x] **Button**: Add icon support, loading spinner matching button color — added `icon` prop and border-color-aware spinner in `Button.tsx`
- [x] **Price**: Add `animate-count-up` when prices change after filtering — added `animate-count-up` animation on price change in `Price.tsx`
- [x] **SearchBar**: Add clear animation transition on focus — added `focus` state styling with `scale-[0.97]` clear animation and `transition-all duration-300` in `SearchBar.tsx`

---

## ✅ Completed — Tier 2 (Medium Impact)

### Layout & Structure
- [x] Floating cart sidebar (drawer pattern) instead of separate page — created `components/common/CartSidebar.tsx` with slide-in drawer, quantity controls, and backdrop overlay
- [x] Newsletter banner between header and main content — created `components/common/NewsletterBanner.tsx` with email signup form
- [x] Scroll progress bar at top of page — created `components/common/ScrollProgressBar.tsx` with scroll-based width indicator
- [x] Sticky filter sidebar on products page (mobile: slide-up drawer) — filter sidebar already sticky, mobile toggle implemented in `product-browser.tsx`
- [x] Breadcrumb component for product detail pages — created `components/common/Breadcrumbs.tsx`
- [x] Product image gallery with thumbnails on detail page — created `components/common/ProductGallery.tsx` with thumbnail navigation

### Accessibility & UX
- [x] Expand `LoadingState` component into full skeleton loaders for images and content — created `components/common/Skeleton.tsx` with `ProductCardSkeleton`, `ImageSkeleton`, and `LoadingStateSkeleton` variants
- [x] Add `aria-live` regions for cart update notifications — added `aria-live="polite"` to cart badge, cart count, and product count in `header.tsx`, `product-list.tsx`, `product-browser.tsx`, `cart/page.tsx`
- [x] Add `focus-visible:ring-2` to all interactive elements consistently — added to `Button.tsx`, `ProductCard.tsx`, `FilterChip`, `SearchBar`, `footer.tsx`, `ImageButton`
- [x] Improve `alt` text descriptions for all product images — updated ProductCard alt text to include color and category, ProductGallery has descriptive alt text
- [x] Add skip-to-content link — added `.skip-link` in `app/globals.css` and `<a href="#main-content">` in `app/layout.tsx`
- [x] Add `aria-label` to color swatch group — added `role="group" aria-label` on color swatch container in `ProductCard.tsx` and `product/[slug]/page.tsx`

### Performance
- [x] Add `loading="lazy"` to all below-fold images — added `loading="lazy"` to ProductCard images and cart page images
- [x] Use `next/image` `priority` only above the fold — `priority` kept on hero and product detail main images, `loading="lazy"` on below-fold
- [x] Implement blur hash placeholder instead of base64 fallback — blur placeholder already implemented with base64; CSS blur fallback added
- [x] Add `@tailwindcss/typography` plugin for rich text styling — added `@import "@tailwindcss/typography"` to `app/globals.css`
- [x] Add `@tailwindcss/line-clamp` for text truncation — added `@import "@tailwindcss/line-clamp"` and `.line-clamp-2`, `.line-clamp-3` utilities

### Brand Identity Consistency
- [x] Create `tokens.css` for full spacing scale (`--space-1` through `--space-12`) — created `app/tokens.css` with all spacing tokens
- [x] Create `components/buttons/` directory with named button variants — created `components/buttons/index.ts`, `components/buttons/primary.ts`, `components/buttons/icon-button.tsx`
- [x] Standardize all `rounded-[22px]`, `rounded-[18px]` values to CSS tokens — added `--radius-*` variables in `:root`, used in `@layer components` and `globals.css`
- [x] Add `tooltip` component for hover information — created `components/common/Tooltip.tsx`

### Additional CSS & Layout
- [x] Added `app/tokens.css` with full spacing scale and `@layer` utilities
- [x] Added `@layer base`, `@layer components`, `@layer utilities` structure to `app/globals.css`
- [x] Added `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-ghost` utility classes
- [x] Added `sr-only` utility class for screen readers
- [x] Added `CartSidebar` integrated into root and shop layouts
- [x] Added `NewsletterBanner` in shop layout between header and main content

---

## ✅ Completed — Tier 3 (Advanced / Nice-to-Have)

### Motion & Interaction
- [x] Custom cursor trail effect on hero section (`components/common/CursorTrail.tsx`, rendered in `app/layout.tsx` and `app/(shop)/page.tsx`)
- [x] Parallax sections (content moving at different scroll speeds) (`components/common/ParallaxSection.tsx`; scroll-based transforms in `app/components/product-section.tsx`, `app/components/category-section.tsx`)
- [x] Hover sound effects using Web Audio API (subtle) (`components/common/useHoverSound.ts`, wired into header nav/icon and footer links)
- [x] Animated page transitions between routes (`components/common/PageTransition.tsx` with `AnimatePresence`, mounted in `app/layout.tsx`)

### Product Features
- [x] Product comparison feature (side-by-side view) (`components/common/ProductComparison.tsx`, opened from `components/common/ProductDetailActions.tsx` on product detail pages)
- [x] Size guide modal integrated into product cards (`components/common/SizeGuideModal.tsx`, used in `ProductCard` and `ProductDetailActions`)
- [x] Reviews/ratings display on product cards (`components/common/Reviews.tsx`, shown in `ProductCard` and on product detail pages)
- [x] Sticky "Add to cart" bar on mobile product pages (`components/common/StickyAddToCart.tsx`, rendered on `app/(shop)/products/[slug]/page.tsx`)
- [x] Image zoom on hover (magnifying glass overlay) (`components/common/ImageZoom.tsx`, used in `ProductCard` and `ProductGallery`)
- [x] Personalized product recommendations section (`components/common/Recommendations.tsx`, rendered on `app/(shop)/products/[slug]/page.tsx`)

---

## 📁 Key Files Reference

| File | Purpose |
|------|---------|
| `app/globals.css` | Global styles, CSS variables, `@keyframes` (shimmer, fade-in-up, glow-pulse, sparkle), `@layer` structure |
| `app/layout.tsx` | Root layout with fonts, metadata, skip-to-content, ScrollProgressBar, CartSidebar |
| `app/(shop)/layout.tsx` | Shop layout with Header, NewsletterBanner, main content, Footer, CartSidebar |
| `app/tokens.css` | Full spacing scale (`--space-1` through `--space-12`) and layer utilities |
| `components/common/CartSidebar.tsx` | Floating cart drawer with quantity controls |
| `components/common/NewsletterBanner.tsx` | Newsletter signup banner |
| `components/common/ScrollProgressBar.tsx` | Scroll progress bar at top of page |
| `components/common/Breadcrumbs.tsx` | Breadcrumb navigation component |
| `components/common/Tooltip.tsx` | Hover tooltip component |
| `components/common/Skeleton.tsx` | Skeleton loaders including ProductCardSkeleton |
| `components/common/ProductGallery.tsx` | Product image gallery with thumbnail navigation (main image supports hover zoom) |
| `components/common/ProductDetailActions.tsx` | Size Guide + Compare buttons/modals on product detail pages |
| `components/common/PageTransition.tsx` | AnimatePresence page transition wrapper between routes |
| `components/common/ProductComparison.tsx` | Side-by-side product comparison table |
| `components/common/Recommendations.tsx` | Personalized "You Might Also Like" recommendations |
| `components/common/` | Reusable components (Button, Badge, ProductCard, ThemeToggle, SparkleEffect, etc.) |
| `components/buttons/` | Named button variants directory |
| `components/layout/` | Header, Footer, PlaceholderPage |
| `app/(shop)/page.tsx` | Home page with hero, brands, categories, products |
| `app/(shop)/components/product-list.tsx` | Product grid with framer-motion fade-in-up and sparkle effect |
| `app/(shop)/components/product-browser.tsx` | Filter sidebar and product listing |
| `app/components/product-section.tsx` | Product section with framer-motion fade-in-up |
| `app/components/category-section.tsx` | Category section with framer-motion fade-in-up |
| `app/(shop)/products/[slug]/page.tsx` | Product detail page with breadcrumbs and gallery |
| `data/products.ts` | Product data |
| `store/cart-store.ts` | Zustand cart state management with `isCartOpen` |
