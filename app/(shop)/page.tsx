import Link from "next/link";
import { categories } from "../../data/categories";
import { products as productData } from "../../data/products";
import { CategorySection } from "../components/category-section";
import { ProductSection } from "../components/product-section";

const brandLogos = ["Myntra", "amazon", "Flipkart", "AJIO"];

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-[#2a5a2a]">
      <path d="M12 2.6l2 5.4 5.3 2-5.3 2-2 5.4-2-5.4-5.3-2 5.3-2 2-5.4Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f7f4ef] text-slate-900">
      <section className="relative overflow-hidden bg-[#eadfc8]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-7%] top-[18%] h-64 w-64 rounded-full bg-[#f3e6c9]/70 blur-3xl" />
          <div className="absolute right-[-6%] top-[14%] h-72 w-72 rounded-full bg-[#d0d3d4]/40 blur-3xl" />
          <div className="absolute -bottom-16 right-[18%] h-52 w-52 rounded-full bg-[#d9c8a4]/80 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1360px] px-4 pb-14 pt-8 md:px-6 lg:px-8 lg:pb-18 lg:pt-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_1fr]">
            <div className="relative z-10 max-w-[640px] pt-2 lg:pt-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f0c96b] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#153d30] shadow-sm shadow-[#a8a07f]/30">
                <span className="h-2 w-2 rounded-full bg-[#153d30]" />
                Daily comfort wear
              </div>

              <h1 className="text-[3.1rem] font-black uppercase leading-[0.82] tracking-[-0.07em] text-[#1b3a2d] sm:text-[4.2rem] lg:text-[5.3rem]">
                Built for your
                <span className="block text-[#1b3a2d]">busiest days</span>
              </h1>

              <p className="mt-4 max-w-xl text-[0.78rem] font-medium uppercase tracking-[0.12em] text-[#2b4b43] md:text-[0.82rem]">
                Knit upper, flexible foam sole, slip in, walk all day, forget your feet ever existed.
              </p>

              <Link
                href="/products"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1f3855] px-6 py-3.5 text-[0.7rem] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#1f3855]/20 transition hover:bg-[#132b45]"
              >
                Shop daily slip-ons
              </Link>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="hero-shoe-wrap relative h-[300px] w-full max-w-[560px] sm:h-[360px] lg:h-[420px]">
                <div className="hero-shadow" />
                <div className="hero-sole" />
                <div className="hero-shoe-top" />
                <div className="hero-shoe-heel" />
                <div className="hero-shoe-detail" />
                <div className="hero-shoe-buckle" />
                <div className="hero-shoe-lace" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0efe9] py-6 md:py-8">
        <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 text-[#1d3a2d]">
            <span className="h-px w-12 bg-[#c7c0b2] md:w-20" />
            <div className="flex items-center gap-2 text-center">
              <IconSpark />
              <h2 className="text-[0.72rem] font-black uppercase tracking-[0.22em] md:text-[0.8rem]">
                Trusted by shoppers
              </h2>
            </div>
            <span className="h-px w-12 bg-[#c7c0b2] md:w-20" />
          </div>

          <div className="mt-6 rounded-[28px] border border-[#d8d1c5] bg-[#f6f5f1] px-4 pb-5 pt-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] md:px-6 md:pb-6">
            <div className="grid w-full max-w-[980px] grid-cols-2 gap-3 mx-auto sm:grid-cols-4">
              {brandLogos.map((brand, index) => (
                <div
                  key={brand}
                  className={`flex min-h-[62px] items-center justify-center rounded-[16px] border border-[#e5dfd3] bg-white text-[1.15rem] font-black uppercase tracking-[-0.06em] shadow-sm ${
                    index === 0 ? "text-[#ff5da7]" : index === 1 ? "text-[#ff9a2e]" : index === 2 ? "text-[#0a70d8]" : "text-[#1a1d2d]"
                  }`}
                >
                  {brand}
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[#53665c]">
              Loved by customers on every major marketplace
            </p>
          </div>
        </div>
      </section>

      <CategorySection categories={categories} />
      <ProductSection products={productData} />
    </div>
  );
}