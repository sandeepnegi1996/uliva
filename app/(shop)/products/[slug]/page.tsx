import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "../../../../components/common/Badge";
import { Price } from "../../../../components/common/Price";
import { products } from "../../../../data/products";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const outOfStock = product.stock === 0;

  return (
    <section className="mx-auto w-full max-w-[1360px] px-4 py-8 md:px-6 lg:px-8">
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2f7d3c] transition hover:text-[#1a2d2e]"
      >
        <span aria-hidden="true">&larr;</span> Back to products
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-[24px] border border-[#efe8dc] bg-[#f5f0ea]">
          <Image
            src={product.images[0]}
            alt={`${product.name} product`}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67]">{product.category}</p>
          <h1 className="mt-2 text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-[#153d30]">
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

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#53665c]">{product.description}</p>

          <div className="mt-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67]">Colours</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <span key={color} className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-[#1a2d2e]">
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67]">Sizes</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span key={size} className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-bold text-[#1a2d2e]">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#e8e2d6] bg-[#f0efe9] px-4 py-3 text-xs font-medium text-[#53665c]">
            Size & colour selection and Add to Cart arrive in Phase 7.
            <Link href="/products" className="ml-1 font-bold text-[#2f7d3c] underline-offset-2 hover:underline">
              Explore products
            </Link>
          </div>

          <button
            type="button"
            disabled
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#1f3855] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white opacity-60 disabled:cursor-not-allowed sm:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}