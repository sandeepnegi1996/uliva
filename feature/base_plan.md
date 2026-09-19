# UI Implementation Plan — Comfort Footwear Ecommerce

## Goal

Build the ecommerce website **UI first** using:

* Next.js App Router
* Tailwind CSS
* Reusable React components
* Static/mock data
* Reference images for visual guidance

### Important

During the initial UI phase:

* Do **not** build backend functionality.
* Do **not** create PostgreSQL schemas.
* Do **not** create API routes.
* Do **not** create server actions.
* Do **not** implement authentication.
* Do **not** implement checkout.
* Do **not** implement real cart functionality.
* Use static/mock data wherever data is required.

---

# Phase 0 — Project Foundation

Status: Completed

Build only the frontend foundation.

### Requirements

* Next.js App Router
* Tailwind CSS
* Global fonts
* Brand color palette
* Typography system
* Responsive container
* Global spacing system
* Basic global styles

### AI Prompt

> Set up the Next.js App Router + Tailwind CSS frontend for a modern comfort-footwear ecommerce website.
>
> For now, build only the frontend foundation.
>
> Do not create any backend, database, API routes, server actions, authentication, or ecommerce functionality.
>
> Configure the brand colors, typography, responsive container, spacing system, and basic global styles according to the provided reference image and specifications.
>
> Keep the code clean and component-based.

---

# Phase 1 — Header + Announcement Bar

Status: Completed

Build:

1. Green announcement ticker
2. Sticky desktop header
3. Logo
4. Navigation links
5. Search icon
6. Account icon
7. Cart icon
8. Mobile hamburger menu
9. Responsive behavior

Use placeholder logo/icons.

### AI Prompt

> Build the announcement bar and responsive sticky navigation for the ecommerce website.
>
> Requirements:
>
> * Green announcement ticker at the top
> * White sticky header
> * Logo on the left
> * Desktop navigation centered
> * Search, account and cart icons on the right
> * Mobile hamburger menu
> * Responsive desktop/tablet/mobile layouts
> * Match the provided reference image closely in spacing, sizing, alignment and visual hierarchy
>
> Use only static/mock content.
>
> Do not implement backend functionality, authentication, search functionality, cart functionality, or database integration.

---

# Phase 2 — Hero Section

Status: In Progress

Build:

* Beige background
* Left text section
* Large condensed heading
* Description
* CTA button
* Right product/lifestyle image
* Decorative circles/shapes
* Carousel arrows
* Carousel dots
* Play/pause control

Initially, use static mock slides.

### AI Prompt

> Build the responsive hero section based on the provided reference image.
>
> Create:
>
> * Beige/warm background
> * Two-column desktop layout
> * Large bold condensed headline
> * Supporting paragraph
> * Dark navy CTA
> * Large product/lifestyle image on the right
> * Decorative circular background elements
> * Carousel arrows
> * Carousel indicators
> * Play/pause control
>
> Use static mock data and placeholder images.
>
> Do not connect to APIs or databases.

---

# Phase 3 — Trust / Marketplace Section

Status: Completed

Build:

* Section heading
* Badge/icon
* Divider lines
* White rounded logo card
* 4 marketplace/partner logo placeholders
* Supporting tagline

### AI Prompt

> Build the trust/marketplace section shown in the reference image.
>
> Focus only on the visual UI:
>
> * Centered heading
> * Badge/icon
> * Decorative divider lines
> * White rounded container
> * Four evenly spaced marketplace logo placeholders
> * Small supporting tagline
>
> Make it responsive and closely match the reference image.
>
> Use static placeholder content only.

---

# Phase 4 — Category Section

Create reusable components:

```text
CategorySection
└── CategoryCard
```

Categories:

* Men's
* Women's
* Kids
* Accessories

### Category Card Features

* Image
* Gradient overlay
* Bottom text
* Hover effect
* Responsive layout

### Responsive Layout

| Device  | Columns |
| ------- | ------: |
| Desktop |       4 |
| Tablet  |       2 |
| Mobile  |       1 |

### AI Prompt

> Build a reusable category section with four category cards: Men's, Women's, Kids and Accessories.
>
> Each card should contain:
>
> * High-quality placeholder image
> * Gradient/scrim overlay
> * Bold uppercase category name
> * Subtle hover interaction
> * Responsive layout
>
> Desktop: 4 columns
> Tablet: 2 columns
> Mobile: 1 column
>
> Keep all data static for now.
>
> Do not add database or API integration.

---

# Phase 5 — Product Grid

Introduce reusable product UI, but still use static data.

Create:

```text
ProductSection
└── ProductCard
```

### Product Card

Each card should contain:

* Sale badge
* Product image
* Product name
* Discounted price
* Original price
* Strikethrough original price
* Add to Cart button
* Hover state

### Responsive Layout

| Device  | Columns |
| ------- | ------: |
| Desktop |       4 |
| Tablet  |       2 |
| Mobile  |       1 |

### AI Prompt

> Build the "New Arrivals" product section using static mock product data.
>
> Create reusable compon
