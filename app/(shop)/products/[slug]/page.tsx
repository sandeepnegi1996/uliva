import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "../../../../components/common/Badge";
import { Price } from "../../../../components/common/Price";
import { Breadcrumbs } from "../../../../components/common/Breadcrumbs";
import { ProductGallery } from "../../../../components/common/ProductGallery";
import { ProductDetailActions } from "../../../../components/common/ProductDetailActions";
import { Reviews } from "../../../../components/common/Reviews";
import { StickyAddToCart } from "../../../../components/common/StickyAddToCart";
import { Recommendations } from "../../../../components/common/Recommendations";
import { products } from "../../../../data/products";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const outOfStock = product.stock === 0;

  const rating = 4 + (product.id.charCodeAt(product.id.length - 1) % 10) / 10;
  const reviewCount = ((product.id.length * 37) % 240) + 12;

  return (
    <section className="mx-auto w-full max-w-[1360px] px-4 py-8 md:px-6 lg:px-8 pb-32">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: product.category, href: `/products?gender=${product.gender}` },
        { label: product.name, href: `/products/${product.slug}` },
      ]} />

      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2f7d3c] transition hover:text-[#1a2d2e] dark:hover:text-[#90c86a]"
      >
        <span aria-hidden="true">&larr;</span> Back to products
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <ProductGallery product={product} />

        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">{product.category}</p>
          <h1 className="mt-2 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-[#153d30] dark:text-[#c4e0a8] font-display">
            {product.name}
          </h1>

          <div className="mt-3">
            <Price value={product.price} mrp={product.mrp} discount={product.discount} size="lg" />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant={outOfStock ? "out" : product.isNew ? "new" : product.isSale ? "sale" : "neutral"}>
              {outOfStock ? "Out of stock" : product.isNew ? "New" : product.isSale ? "Sale" : "In stock"}
            </Badge>
            <Badge variant={outOfStock ? "danger" : "success"}>
              {outOfStock ? "No stock" : `${product.stock} in stock`}
            </Badge>
          </div>

          <div className="mt-3">
            <Reviews rating={rating} count={reviewCount} size="md" />
          </div>

          <p className="mt-5 max-w-prose text-sm leading-relaxed text-[#53665c] dark:text-[#8a9a94] line-clamp-3">{product.description}</p>

          <div className="mt-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">Colours</p>
            <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Available colours">
              {product.colors.map((color) => (
                <span key={color} className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-[#1a2d2e] dark:border-stone-600 dark:bg-[#222a24] dark:text-[#e8ede8]" title={color}>
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67] dark:text-[#8a9a94]">Sizes</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span key={size} className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-bold text-[#1a2d2e] dark:border-stone-600 dark:bg-[#222a24] dark:text-[#e8ede8]">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#e8e2d6] bg-[#f0efe9] px-4 py-3 text-xs font-medium text-[#53665c] dark:border-stone-700 dark:bg-[#1e2520] dark:text-[#8a9a94]">
            Size &amp; colour selection and Add to Cart arrive in Phase 7.
            <Link href="/products" className="ml-1 font-bold text-[#2f7d3c] dark:text-[#90c86a] underline-offset-2 hover:underline">
              Explore products
            </Link>
          </div>

          <button
            type="button"
            disabled
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#1f3855] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white opacity-60 disabled:cursor-not-allowed sm:w-auto dark:bg-[#3a5a4a]"
          >
            Add to Cart
          </button>

          <ProductDetailActions product={product} products={products} />
        </div>
      </div>

      <Recommendations products={products} currentProductId={product.id} />
      <StickyAddToCart product={product} />
    </section>
  );
}
