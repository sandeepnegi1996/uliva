# U-Liva MVP — Frontend-Only Implementation Plan

## Objective

Build the complete **U-Liva MVP as a frontend-only application first**.

At this stage, **do not implement any backend, database, API, PostgreSQL, authentication server, payment gateway, network calls, or SSL configuration**.

Everything should work using:

* Next.js / React
* Tailwind CSS
* Static/mock data
* Local state
* Context/Zustand if required
* `localStorage` where persistence is useful
* Mock products
* Mock customers
* Mock orders
* Mock payment results

### Main Goal

> Make the entire customer + admin experience work visually and functionally in the browser before connecting any real backend services.

---

# Overall Development Roadmap

```text
PHASE 0  → Frontend Architecture
PHASE 1  → Mock Data & Application State
PHASE 2  → Shared UI Components
PHASE 3  → Customer Navigation
PHASE 4  → Product Listing
PHASE 5  → Search
PHASE 6  → Product Filters
PHASE 7  → Product Details
PHASE 8  → Shopping Cart
PHASE 9  → Buy Now
PHASE 10 → Checkout — Customer Details
PHASE 11 → Checkout — Address
PHASE 12 → Checkout — Order Summary
PHASE 13 → Checkout — Coupon
PHASE 14 → Checkout — Payment UI
PHASE 15 → Place Order
PHASE 16 → Order Confirmation
PHASE 17 → Customer Order History
PHASE 18 → Order Details & Tracking
PHASE 19 → WhatsApp UI
PHASE 20 → Admin Login UI
PHASE 21 → Admin Dashboard
PHASE 22 → Admin Product Management
PHASE 23 → Admin Product Form
PHASE 24 → Admin Image Management
PHASE 25 → Admin Inventory Management
PHASE 26 → Admin Order Management
PHASE 27 → Admin Order Status
PHASE 28 → Admin Order Details
PHASE 29 → Frontend Validation & Error States
PHASE 30 → Mobile Optimization
PHASE 31 → Complete Customer Journey Test
PHASE 32 → Complete Admin Journey Test
PHASE 33 → Final UI Polish
```

---

# PHASE 0 — Frontend Architecture

Status: Completed

Establish a clean frontend structure before implementing functionality.

## Suggested Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── products/
│   ├── categories/
│   ├── cart/
│   ├── checkout/
│   ├── orders/
│   └── admin/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── product/
│   ├── cart/
│   ├── checkout/
│   ├── order/
│   └── admin/
│
├── data/
│   ├── products.ts
│   ├── categories.ts
│   ├── orders.ts
│   └── customers.ts
│
├── types/
│   ├── product.ts
│   ├── cart.ts
│   ├── order.ts
│   └── customer.ts
│
├── store/
│   ├── cart-store.ts
│   ├── order-store.ts
│   └── auth-store.ts
│
└── utils/
    ├── price.ts
    ├── validation.ts
    └── format.ts
```

## Acceptance Criteria

* [x] Application has a clear frontend structure.
* [x] Components are reusable.
* [x] Product/order/customer types are defined.
* [x] No backend code exists.
* [x] No database code exists.
* [x] No API calls exist.
* [x] Existing homepage continues working.

---

# PHASE 1 — Mock Data Layer

Status: Completed

Create realistic mock data that powers the entire application.

## Product Data

Each product should contain:

```text
id
name
slug
category
gender
images
price
mrp
discount
sizes
colors
description
stock
isNew
isSale
```

## Create Mock Data For

* Men's products
* Women's products
* Different sizes
* Different colours
* Products in stock
* Products out of stock
* Discounted products
* New products
* Mock customers
* Mock addresses
* Mock orders
* Different order statuses

## Acceptance Criteria

* [x] At least 12–20 realistic products exist.
* [x] Both Men's and Women's products exist.
* [x] Products have multiple sizes.
* [x] Products have multiple colours.
* [x] Some products have discounts.
* [x] Some products are out of stock.
* [x] Mock orders exist.
* [x] All UI features can use this data.
* [x] Product information is not unnecessarily hardcoded inside components.

---

# PHASE 2 — Shared UI Components

Status: Completed

Create reusable components before implementing larger features.

## Components

```text
Button
Input
Select
Modal
Badge
Price
ProductCard
ProductGrid
SearchBar
EmptyState
LoadingState
ConfirmationModal
Pagination
```

## Acceptance Criteria

* [x] Common UI elements are reusable.
* [x] Buttons have consistent styling.
* [x] Inputs have consistent styling.
* [x] Product price formatting is reusable.
* [x] Product cards are reusable.
* [x] Components support responsive layouts.
* [x] No unnecessary duplicate UI code exists.

---

# PHASE 3 — Customer Navigation

Status: Completed

Implement navigation between major customer pages.

## Pages

```text
Home
Men's
Women's
All Products
Product Details
Cart
Checkout
Order Confirmation
My Orders
Order Details
```

## Header

Support:

* Logo
* Men's
* Women's
* Search
* Cart
* Mobile menu

## Acceptance Criteria

* [x] Every customer page is reachable.
* [x] Navigation works without errors.
* [x] Active category is visually identifiable.
* [x] Cart icon shows cart item count.
* [x] Mobile navigation works.
* [x] No backend/network dependency exists.

---

# PHASE 4 — Product Listing

Status: Completed

Build the main product listing experience.

## Pages

```text
All Products
Men's
Women's
```

## Product Card

Display:

* Image
* Product name
* Price
* MRP
* Discount
* Available colours
* Sale badge
* Stock status
* Add to Cart

## Acceptance Criteria

* [x] Products display correctly.
* [x] Men's category displays Men's products.
* [x] Women's category displays Women's products.
* [x] Product cards are clickable.
* [x] Product information is consistent.
* [x] Responsive product grid works.

---

# PHASE 5 — Basic Search

Status: Completed

Implement frontend-only search.

## Search Against

* Product name
* Category
* Colour
* Description

## Features

* Search input
* Search results
* Result count
* Empty state
* Clear search

## Acceptance Criteria

* [x] Search works without API calls.
* [x] Search updates results dynamically.
* [x] Search is case-insensitive.
* [x] Empty results display a useful message.
* [x] Search can be cleared.
* [x] Mobile search works.

---

# PHASE 6 — Basic Product Filters

Status: Completed

Implement simple frontend filtering.

## Category

```text
All
Men
Women
```

## Size

```text
6
7
8
9
10
```

## Colour

```text
Black
Brown
Blue
White
```

## Price

```text
Under ₹2,000
₹2,000–₹3,000
Above ₹3,000
```

## Availability

```text
In Stock
Out of Stock
```

## Acceptance Criteria

* [x] Filters update products immediately.
* [x] Multiple filters can work together.
* [x] Clear filters works.
* [x] Product count updates.
* [x] Filters work on mobile.
* [x] No API/network calls are required.

---

# PHASE 7 — Product Details

Status: Completed

Create:

```text
/products/[slug]
```

## Product Page

Include:

* Product image gallery
* Product name
* Price
* MRP
* Discount
* Colour selection
* Size selection
* Stock status
* Description
* Product features
* Quantity
* Add to Cart
* Buy Now
* Size Guide

## Important States

### In Stock

Show:

```text
Add to Cart
Buy Now
```

### Out of Stock

Disable purchase actions.

### No Size Selected

Show validation.

### No Colour Selected

Show validation where applicable.

## Acceptance Criteria

* [x] Correct product opens from product listing.
* [x] Image gallery works.
* [x] Size selection works.
* [x] Colour selection works.
* [x] Quantity selection works.
* [x] Add to Cart works.
* [x] Buy Now works.
* [x] Out-of-stock products cannot be purchased.
* [x] Validation messages are displayed correctly.

---

# PHASE 8 — Shopping Cart

Create a frontend cart store.

Possible options:

* React Context
* Zustand
* `localStorage`

For this MVP, Zustand + `localStorage` is a simple option.

## Cart Functionality

* Add item
* Remove item
* Increase quantity
* Decrease quantity
* Change size
* Change colour
* Show subtotal
* Show item count
* Empty cart

## Cart UI

```text
Product
Size
Colour
Quantity
Price
Subtotal
Remove
```

## Acceptance Criteria

* [ ] Add to Cart works.
* [ ] Cart count updates.
* [ ] Quantity can be changed.
* [ ] Items can be removed.
* [ ] Subtotal updates automatically.
* [ ] Empty cart is handled.
* [ ] Cart survives page refresh.
* [ ] Cart is responsive.

---

# PHASE 9 — Buy Now

Implement the Buy Now flow separately from normal cart shopping.

## Flow

```text
Product Details
      ↓
Select Size
      ↓
Select Colour
      ↓
Buy Now
      ↓
Checkout
```

## Acceptance Criteria

* [ ] Buy Now works from product details.
* [ ] Selected size is retained.
* [ ] Selected colour is retained.
* [ ] Selected quantity is retained.
* [ ] Checkout shows the correct product.
* [ ] Unrelated cart items are not added.

---

# PHASE 10 — Checkout: Customer Details

Create the checkout page.

## Customer Information

```text
Full Name
Mobile Number
```

## Validation

### Name

* Required

### Mobile

* Required
* 10-digit Indian mobile number

## Acceptance Criteria

* [ ] Customer can enter their name.
* [ ] Customer can enter mobile number.
* [ ] Required-field validation works.
* [ ] Invalid mobile numbers are rejected.
* [ ] Valid information allows the user to continue.

---

# PHASE 11 — Checkout: Delivery Address

Add:

```text
Address
Pincode
City
State
```

For the frontend-only MVP, city/state can optionally be derived from mock frontend data based on the pincode.

## Acceptance Criteria

* [ ] Address fields are available.
* [ ] Pincode validation works.
* [ ] Required fields are validated.
* [ ] Invalid pincode is rejected.
* [ ] Address appears correctly in the final order summary.

---

# PHASE 12 — Checkout: Order Summary

Display:

```text
Product
Size
Colour
Quantity
Price
Subtotal
Shipping
Discount
Total
```

## Shipping Rule

Use a frontend rule initially.

Example:

```text
Subtotal >= ₹999 → Free Shipping
Subtotal < ₹999 → ₹99 Shipping
```

Keep the rule configurable in one place.

## Acceptance Criteria

* [ ] Correct products appear.
* [ ] Quantity is correct.
* [ ] Subtotal is correct.
* [ ] Shipping is calculated correctly.
* [ ] Final total is correct.
* [ ] Values update when cart data changes.

---

# PHASE 13 — Coupon UI

Coupons are optional for the MVP.

Create a simple frontend coupon system.

## Mock Coupons

```text
WELCOME10 → 10% discount
ULIVA500  → ₹500 discount
```

## Features

* Coupon input
* Apply button
* Success message
* Invalid coupon message
* Remove coupon

## Acceptance Criteria

* [ ] Valid coupon applies.
* [ ] Invalid coupon is rejected.
* [ ] Discount appears in summary.
* [ ] Total updates correctly.
* [ ] Coupon can be removed.
* [ ] Discount cannot exceed order value.

---

# PHASE 14 — Payment UI

Do **not** integrate a real payment gateway yet.

Build only the payment interface.

## Payment Methods

```text
UPI
Card
Net Banking
Cash on Delivery
```

## UPI

Display:

```text
UPI ID
```

## Card

Display:

```text
Card Number
Expiry
CVV
Card Holder Name
```

## COD

Display:

```text
Cash on Delivery selected
```

Use fake/mock payment processing.

## Acceptance Criteria

* [ ] User can select a payment method.
* [ ] Selected method is visually highlighted.
* [ ] Required payment fields appear conditionally.
* [ ] Validation works.
* [ ] Mock payment can succeed.
* [ ] Mock payment can fail.
* [ ] COD can be selected.
* [ ] No real payment API is called.

---

# PHASE 15 — Place Order

Create a frontend order creation flow.

When the user clicks:

```text
Place Order
```

Generate a mock order.

Example:

```text
ULV-20260919-001
```

Store the order in frontend state/localStorage.

## Acceptance Criteria

* [ ] Order is generated.
* [ ] Unique order ID is displayed.
* [ ] Customer information is stored.
* [ ] Address is stored.
* [ ] Products are stored.
* [ ] Payment method is stored.
* [ ] Order total is stored.
* [ ] Initial status is `Placed`.

---

# PHASE 16 — Order Confirmation

Create:

```text
/order-success
```

Show:

* Success message
* Order ID
* Customer name
* Items
* Total
* Payment method
* Delivery address
* Expected delivery date
* Continue Shopping
* View Order

## Acceptance Criteria

* [ ] Correct order ID is shown.
* [ ] Correct products are shown.
* [ ] Correct total is shown.
* [ ] Correct address is shown.
* [ ] View Order works.
* [ ] Continue Shopping works.

---

# PHASE 17 — Customer Order History

Create:

```text
/my-orders
```

Show:

```text
Order ID
Date
Amount
Items
Status
View Details
```

## Acceptance Criteria

* [ ] Orders appear after placing an order.
* [ ] Multiple orders can be displayed.
* [ ] Status is displayed.
* [ ] Order details can be opened.
* [ ] Empty order history has an empty state.

---

# PHASE 18 — Order Details & Tracking

Create:

```text
/my-orders/[orderId]
```

## Order Statuses

```text
Placed
   ↓
Confirmed
   ↓
Shipped
   ↓
Delivered
```

Alternative:

```text
Cancelled
```

## Tracking UI

Create a visual timeline:

```text
✓ Order Placed
      ↓
✓ Confirmed
      ↓
● Shipped
      ↓
○ Delivered
```

## Acceptance Criteria

* [ ] Current order status is clearly visible.
* [ ] Timeline reflects current status.
* [ ] Cancelled orders display cancellation state.
* [ ] Order details are visible.
* [ ] Tracking works completely with mock data.

---

# PHASE 19 — WhatsApp UI

For now, do not connect WhatsApp APIs.

## Order Confirmation

Display:

```text
Order confirmed

[Contact us on WhatsApp]
```

## Floating WhatsApp Button

Use the existing floating button.

For now it can perform a placeholder/mock action.

## Acceptance Criteria

* [ ] WhatsApp button is visible.
* [ ] Button is responsive.
* [ ] Order confirmation contains WhatsApp CTA.
* [ ] No WhatsApp API is integrated.

---

# PHASE 20 — Admin Login UI

Create:

```text
/admin/login
```

## UI

```text
Email
Password
Remember me
Login
```

For the frontend-only MVP, use mock credentials.

Example:

```text
admin@uliva.com
admin123
```

Do not implement real authentication.

## Acceptance Criteria

* [ ] Login page works.
* [ ] Validation works.
* [ ] Correct mock credentials allow access.
* [ ] Incorrect credentials show an error.
* [ ] Admin can logout.
* [ ] Admin pages cannot be casually accessed without frontend auth state.

---

# PHASE 21 — Admin Dashboard

Create:

```text
/admin
```

## Dashboard Cards

```text
Total Products
Total Orders
Pending Orders
Delivered Orders
Total Customers
```

Use mock data.

## Acceptance Criteria

* [ ] Dashboard loads.
* [ ] Statistics display correctly.
* [ ] Sidebar navigation works.
* [ ] Mobile admin navigation works.
* [ ] Data is derived from mock state rather than unnecessarily hardcoded.

---

# PHASE 22 — Admin Product Management

Create:

```text
/admin/products
```

## Features

* Product list
* Search
* Filter
* Add Product
* Edit Product
* Delete Product
* Product status

## Table

```text
Image
Product
Category
Price
Stock
Status
Actions
```

## Acceptance Criteria

* [ ] Products appear.
* [ ] Admin can search products.
* [ ] Admin can filter products.
* [ ] Add Product opens form.
* [ ] Edit Product opens existing data.
* [ ] Delete confirmation works.
* [ ] Product changes update the frontend product listing.

---

# PHASE 23 — Admin Product Form

Create reusable:

```text
ProductForm
```

## Fields

```text
Product Name
Category
Gender
Description
Price
MRP
Sizes
Colours
Stock
Sale Status
New Arrival
```

## Acceptance Criteria

* [ ] Product can be created.
* [ ] Product can be edited.
* [ ] Required fields are validated.
* [ ] Price/MRP validation works.
* [ ] Sizes can be selected.
* [ ] Colours can be selected.
* [ ] Stock can be entered.
* [ ] Changes appear on customer-facing product pages.

---

# PHASE 24 — Admin Image Management

Build frontend image management.

For now, images can use:

* Local files
* Object URLs
* Placeholder URLs

Do not upload to cloud storage yet.

## Features

* Main product image
* Multiple product images
* Image preview
* Remove image
* Change main image
* Drag/reorder if useful

## Acceptance Criteria

* [ ] Images can be selected.
* [ ] Image previews work.
* [ ] Images can be removed.
* [ ] Multiple images are supported.
* [ ] Main image can be selected.

---

# PHASE 25 — Admin Inventory Management

Create inventory UI.

Display:

```text
Product
Size
Colour
Stock
Status
```

## Statuses

```text
In Stock
Low Stock
Out of Stock
```

## Acceptance Criteria

* [ ] Stock is visible.
* [ ] Stock can be changed.
* [ ] Low-stock state is displayed.
* [ ] Out-of-stock state is displayed.
* [ ] Customer product page reflects stock state.

---

# PHASE 26 — Admin Order Management

Create:

```text
/admin/orders
```

## Features

* Order list
* Search
* Filter
* Status filter
* Date filter UI
* Order details

## Table

```text
Order ID
Customer
Date
Items
Amount
Payment
Status
Action
```

## Acceptance Criteria

* [ ] Orders appear.
* [ ] Orders can be searched.
* [ ] Orders can be filtered.
* [ ] Order details can be opened.
* [ ] Status can be changed.

---

# PHASE 27 — Admin Order Status

Admin should be able to change:

```text
Placed
↓
Confirmed
↓
Shipped
↓
Delivered
```

Or:

```text
Cancelled
```

When the admin changes the status, customer-facing order tracking should immediately reflect the change.

## Acceptance Criteria

* [ ] Admin can change status.
* [ ] Status is stored in frontend state.
* [ ] Customer order history reflects the change.
* [ ] Tracking timeline reflects the change.
* [ ] Invalid status transitions are prevented where appropriate.

---

# PHASE 28 — Admin Order Details

Create:

```text
/admin/orders/[orderId]
```

## Customer

```text
Name
Mobile
Address
Pincode
```

## Order

```text
Order ID
Date
Products
Sizes
Colours
Quantity
Price
Total
```

## Payment

```text
Payment Method
Payment Status
```

## Status

```text
Placed
Confirmed
Shipped
Delivered
Cancelled
```

## Acceptance Criteria

* [ ] Complete order information is visible.
* [ ] Customer information is visible.
* [ ] Products are visible.
* [ ] Payment information is visible.
* [ ] Status can be updated.
* [ ] Changes are reflected in customer UI.

---

# PHASE 29 — Frontend Validation & Error States

Systematically handle edge cases.

## Customer Side

Test:

* Empty cart
* Invalid search
* No products
* Missing size
* Missing colour
* Out of stock
* Invalid mobile number
* Invalid pincode
* Missing address
* Invalid coupon
* Payment failure
* Cancelled order

## Admin Side

Test:

* Empty product list
* Invalid product
* Missing image
* Invalid price
* Invalid stock
* Delete confirmation
* Empty order list

## Acceptance Criteria

* [ ] No major action produces a broken screen.
* [ ] Forms display useful errors.
* [ ] Empty states exist.
* [ ] Loading states exist where appropriate.
* [ ] Confirmation dialogs exist for destructive actions.

---

# PHASE 30 — Mobile Optimization

Test the complete application on:

```text
Desktop
Tablet
Mobile
```

Pay special attention to:

* Header
* Navigation
* Product grid
* Product details
* Cart
* Checkout
* Payment
* Order tracking
* Admin dashboard
* Admin tables

## Acceptance Criteria

* [ ] No horizontal scrolling.
* [ ] Buttons are touch-friendly.
* [ ] Forms fit mobile screens.
* [ ] Product images scale correctly.
* [ ] Tables become mobile-friendly.
* [ ] Navigation works properly.
* [ ] Checkout is easy to use on mobile.

---

# PHASE 31 — Complete Customer Journey Test

Run the entire flow:

```text
Homepage
   ↓
Men's / Women's
   ↓
Product Listing
   ↓
Search / Filter
   ↓
Product Details
   ↓
Select Size
   ↓
Select Colour
   ↓
Add to Cart
   ↓
Cart
   ↓
Checkout
   ↓
Customer Details
   ↓
Address
   ↓
Coupon
   ↓
Payment
   ↓
Place Order
   ↓
Order Confirmation
   ↓
My Orders
   ↓
Order Details
   ↓
Order Tracking
```

## Acceptance Criteria

* [ ] Entire journey works without backend.
* [ ] No broken navigation.
* [ ] Product information remains consistent.
* [ ] Cart information remains consistent.
* [ ] Checkout totals remain consistent.
* [ ] Order is created successfully.
* [ ] Order appears in order history.
* [ ] Order status can be changed from admin.

---

# PHASE 32 — Complete Admin Journey Test

Test:

```text
Admin Login
    ↓
Dashboard
    ↓
Products
    ↓
Add Product
    ↓
Edit Product
    ↓
Inventory
    ↓
Orders
    ↓
Order Details
    ↓
Update Status
    ↓
Customer Order Tracking
```

## Acceptance Criteria

* [ ] Admin login works.
* [ ] Dashboard works.
* [ ] Product management works.
* [ ] Inventory works.
* [ ] Order management works.
* [ ] Status updates work.
* [ ] Customer side reflects admin changes.

---

# PHASE 33 — Final UI Polish

Only after functionality is complete.

Focus on:

* Typography
* Spacing
* Button consistency
* Hover states
* Transitions
* Loading states
* Empty states
* Error states
* Modal animations
* Image loading
* Mobile spacing
* Accessibility
* Keyboard navigation
* Focus states

## Acceptance Criteria

* [ ] UI feels consistent across the application.
* [ ] All buttons have appropriate states.
* [ ] All forms have focus/error/success states.
* [ ] Animations are subtle.
* [ ] Accessibility basics are covered.
* [ ] No obvious visual inconsistencies remain.

---

# Final Frontend MVP

When all phases are complete, you should have a fully interactive frontend prototype.

```text
                         U-LIVA
                           │
             ┌─────────────┴─────────────┐
             │                           │
        CUSTOMER APP                ADMIN APP
             │                           │
        Homepage                    Admin Login
             │                           │
      Product Listing              Dashboard
             │                           │
       Search / Filter              Products
             │                           │
      Product Details             Add / Edit
             │                           │
        Add to Cart               Inventory
             │                           │
          Buy Now                   Orders
             │                           │
         Checkout               Order Details
             │                           │
      Mock Payment              Update Status
             │                           │
      Order Created                    │
             │                           │
      Order Confirmation               │
             │                           │
        My Orders ◄────────────────────┘
             │
       Order Tracking
```

---

# What Comes After the Frontend MVP

Only after the complete frontend MVP works correctly should the mock layer be replaced with real services.

## Current Frontend-Only Architecture

```text
Static Data
     ↓
Frontend State
     ↓
localStorage
     ↓
Complete UI MVP
```

## Future Production Architecture

```text
Frontend
    ↓
API / Server Actions
    ↓
PostgreSQL
    ↓
Authentication
    ↓
Image Storage
    ↓
Real Payment Gateway
    ↓
WhatsApp Integration
    ↓
Production Deployment
```

---

# Immediate Next Step

Since the **UI Implementation Plan is already completed**, start with:

```text
PHASE 0
Frontend Architecture
        ↓
PHASE 1
Mock Data Layer
        ↓
PHASE 2
Shared UI Components
        ↓
PHASE 3
Customer Navigation
```

Then continue **one phase at a time**.

Do not give the entire 33-phase plan to the coding AI as one implementation request. Give it the **current phase + its acceptance criteria**, test the result, and then move to the next phase.
im