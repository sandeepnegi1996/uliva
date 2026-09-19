const navItems = ["Women", "Men", "Kids", "Footwear", "Accessories", "Sale"];

const brandLogos = ["Myntra", "amazon", "Flipkart", "AJIO"];

const categories = [
  { name: "Men's", tone: "from-stone-200 via-stone-100 to-stone-50" },
  { name: "Women's", tone: "from-amber-200 via-orange-100 to-stone-50" },
  { name: "Kids", tone: "from-sky-200 via-sky-100 to-stone-50" },
  { name: "Footwear Accessories", tone: "from-emerald-200 via-emerald-100 to-stone-50" },
];

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16L21 21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 19.3c1.8-3.1 5.2-4.8 8-4.8s6.2 1.7 8 4.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-[#2a5a2a]">
      <path d="M12 2.6l2 5.4 5.3 2-5.3 2-2 5.4-2-5.4-5.3-2 5.3-2 2-5.4Z" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-900">
      <div className="bg-[#90c86a] text-[#123423]">
        <div className="mx-auto flex max-w-[1360px] items-center justify-center gap-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] md:text-[11px]">
          <span>Free shipping on orders over ₹999</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">New arrivals every week</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#153d30] text-xl font-black text-[#d9f39b] shadow-inner shadow-white/20">
              D
            </div>
            <div className="leading-none">
              <div className="text-[15px] font-black uppercase tracking-[0.12em] text-[#163d34]">Doctor</div>
              <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.32em] text-[#899a88]">Extra Soft</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.16em] text-[#1a2d2e] md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-[#5ca15f]">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-[#173f35]">
            <button aria-label="Search" className="rounded-full border border-stone-200 p-2 transition hover:border-stone-300 hover:bg-stone-100">
              <IconSearch />
            </button>
            <button aria-label="Account" className="rounded-full border border-stone-200 p-2 transition hover:border-stone-300 hover:bg-stone-100">
              <IconUser />
            </button>
            <button aria-label="Cart" className="relative rounded-full border border-stone-200 p-2 transition hover:border-stone-300 hover:bg-stone-100">
              <IconCart />
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#90c86a] px-1 text-[9px] font-bold text-[#123423]">
                2
              </span>
            </button>
            <button aria-label="Menu" className="rounded-full border border-stone-200 p-2 md:hidden">
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      <main>
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

                <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1f3855] px-6 py-3.5 text-[0.7rem] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-[#1f3855]/20 transition hover:bg-[#132b45]">
                  Shop daily slip-ons
                </button>
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

        <section className="bg-[#f7f4ef] py-8 md:py-10">
          <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 text-[#1d3a2d]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em]">Shop by category</span>
              </div>
              <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#53665c]">
                Explore the perfect fit for every day
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => (
                <article
                  key={category.name}
                  className={`group relative overflow-hidden rounded-[20px] border border-[#e8e2d6] bg-gradient-to-br ${category.tone} p-3 shadow-sm`}
                >
                  <div className="relative h-[220px] overflow-hidden rounded-[16px] bg-[#f1e5d7]">
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#112d2d]/65 via-[#112d2d]/10 to-transparent" />
                    <div className="absolute inset-0 flex items-end justify-center pb-6">
                      <div className="h-20 w-24 rounded-[28%_38%_40%_45%] bg-[#e9d1a8] shadow-[inset_0_0_0_6px_rgba(255,255,255,0.25)]" />
                    </div>
                    <div className="absolute left-1/2 top-1/2 h-14 w-12 -translate-x-1/2 -translate-y-1/2 rounded-[40%_35%_30%_30%] border-[6px] border-[#2f3a41] bg-[#101a21] shadow-[0_8px_0_rgba(17,26,31,0.35)]" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                    <p className="text-[1.7rem] font-black uppercase leading-none tracking-[-0.06em] text-white drop-shadow-md">
                      {category.name}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}