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

## 🔲 Remaining Tasks — Tier 1 (Micro-interactions & Motion)

### Micro-interactions & Motion
- [ ] Add `@keyframe` shimmer/pulse animation to "New" badge (subtle glow)
- [ ] Add image hover `blur-to-sharp` transition (currently only scale)
- [ ] Add `cursor:pointer` visual feedback on all clickable areas
- [ ] Add `fade-in-up` entrance animation using `framer-motion` for sections
- [ ] Add confetti or sparkle effect when item is added to cart

### Component-Level Enhancements
- [ ] **ProductCard**: Add quick-view overlay (eye icon) on hover
- [ ] **ProductCard**: Add "Wishlist" heart icon toggle
- [ ] **ProductCard**: Add tooltip on color swatches showing color name
- [ ] **Badge**: Add subtle `animate-pulse` glow effect on "Hot" badges
- [ ] **Button**: Add icon support, loading spinner matching button color
- [ ] **Price**: Add `animate-count-up` when prices change after filtering
- [ ] **SearchBar**: Add clear animation transition on focus

---

## 🔲 Remaining Tasks — Tier 2 (Medium Impact)

### Layout & Structure
- [ ] Floating cart sidebar (drawer pattern) instead of separate page
- [ ] Newsletter banner between header and main content
- [ ] Scroll progress bar at top of page
- [ ] Sticky filter sidebar on products page (mobile: slide-up drawer)
- [ ] Breadcrumb component for product detail pages
- [ ] Product image gallery with thumbnails on detail page

### Accessibility & UX
- [ ] Expand `LoadingState` component into full skeleton loaders for images and content
- [ ] Add `aria-live` regions for cart update notifications
- [ ] Add `focus-visible:ring-2` to all interactive elements consistently
- [ ] Improve `alt` text descriptions for all product images
- [ ] Add skip-to-content link
- [ ] Add `aria-label` to color swatch group

### Performance
- [ ] Add `loading="lazy"` to all below-fold images
- [ ] Use `next/image` `priority` only above the fold
- [ ] Implement blur hash placeholder instead of base64 fallback
- [ ] Add `@tailwindcss/typography` plugin for rich text styling
- [ ] Add `@tailwindcss/line-clamp` for text truncation

### Brand Identity Consistency
- [ ] Create `tokens.css` for full spacing scale (`--space-1` through `--space-12`)
- [ ] Create `components/buttons/` directory with named button variants
- [ ] Standardize all `rounded-[22px]`, `rounded-[18px]` values to CSS tokens
- [ ] Add `tooltip` component for hover information

---

## 🔲 Remaining Tasks — Tier 3 (Advanced / Nice-to-Have)

- [ ] Custom cursor or cursor trail effect on hero section
- [ ] Parallax sections (content moving at different scroll speeds)
- [ ] Hover sound effects using Web Audio API (subtle)
- [ ] Product comparison feature (side-by-side view)
- [ ] Size guide modal integrated into product cards
- [ ] Reviews/ratings display on product cards
- [ ] Animated page transitions between routes
- [ ] Sticky "Add to cart" bar on mobile product pages
- [ ] Image zoom on hover (magnifying glass overlay)
- [ ] Personalized product recommendations section

---

## 📁 Key Files Reference

| File | Purpose |
|------|---------|
| `app/globals.css` | Global styles, CSS variables, Tailwind config |
| `app/layout.tsx` | Root layout with fonts and metadata |
| `components/common/` | Reusable components (Button, Badge, ProductCard, ThemeToggle, etc.) |
| `components/layout/` | Header, Footer, PlaceholderPage |
| `app/(shop)/page.tsx` | Home page with hero, brands, categories, products |
| `app/(shop)/components/product-list.tsx` | Product grid with staggered animation |
| `app/(shop)/components/product-browser.tsx` | Filter sidebar and product listing |
| `data/products.ts` | Product data |
| `store/cart-store.ts` | Zustand cart state management |
