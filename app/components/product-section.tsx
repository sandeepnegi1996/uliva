import Image from "next/image";

type Product = {
  name: string;
  category: string;
  image: string;
  price: number;
  originalPrice: number;
  badge: string;
};

type ProductCardProps = Product;

type ProductSectionProps = {
  products: Product[];
};

export function ProductCard({ name, category, image, price, originalPrice, badge }: ProductCardProps) {
  return (
    <article className="group rounded-[22px] border border-[#e8e2d6] bg-white p-3 shadow-[0_10px_20px_rgba(22,31,29,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(22,31,29,0.08)]">
      <div className="relative overflow-hidden rounded-[18px] border border-[#efe8dc] bg-[#f5f0ea] p-3">
        <span className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-[#ee7d77] px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.14em] text-white shadow-sm">
          {badge}
        </span>

        <div className="relative h-56 overflow-hidden rounded-[14px] bg-[#f6f1e9]">
          <Image
            src={image}
            alt={`${name} product`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67]">{category}</p>
        <h3 className="mt-2 text-[1.25rem] font-black uppercase leading-[1.05] tracking-[-0.06em] text-[#153d30]">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-[1.05rem] font-black text-[#153d30]">₹{price}</span>
          <span className="text-[0.8rem] font-medium text-[#7a7a72] line-through">₹{originalPrice}</span>
        </div>

        <button className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#1f3855] px-4 py-3 text-[0.68rem] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45]">
          Add to cart
        </button>
      </div>
    </article>
  );
}

export function ProductSection({ products }: ProductSectionProps) {
  return (
    <section aria-labelledby="product-heading" className="bg-[#f7f4ef] py-10 md:py-14">
      <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
        <div className="mb-7 flex flex-col items-center text-center md:mb-9">
          <div className="inline-flex items-center gap-2 text-[#1d3a2d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
            <h2 id="product-heading" className="text-[0.72rem] font-black uppercase tracking-[0.22em] md:text-[0.8rem]">
              New arrivals
            </h2>
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
          </div>
          <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#53665c]">
            Discover the comfort you keep reaching for
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
