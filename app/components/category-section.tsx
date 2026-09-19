import Image from "next/image";
import Link from "next/link";

type Category = {
  name: string;
  description: string;
  image: string;
  tone: string;
  accent: string;
  gender?: string;
};

type CategoryCardProps = Category;

type CategorySectionProps = {
  categories: Category[];
};

export function CategoryCard({ name, description, image, tone, accent, gender }: CategoryCardProps) {
  const href = gender ? `/products?gender=${gender}` : "/products";
  return (
    <Link
      href={href}
      className={`group relative isolate flex min-h-[300px] overflow-hidden rounded-[22px] border border-[#e8e2d6] bg-gradient-to-br ${tone} p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1d3a2d]`}
    >
      <div className="relative min-h-[274px] w-full overflow-hidden rounded-[16px] bg-white/35">
        <Image
          src={image}
          alt={`${name} comfort footwear collection`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102b2b]/85 via-[#102b2b]/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-left">
          <span className={`mb-2 block text-[0.65rem] font-bold uppercase tracking-[0.18em] ${accent}`}>
            Comfort collection
          </span>
          <h3 className="text-[2rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white drop-shadow-md">
            {name}
          </h3>
          <p className="mt-2 max-w-[14rem] text-[0.68rem] font-medium uppercase tracking-[0.1em] text-white/80">
            {description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-white">
            Explore <span aria-hidden="true" className="text-base leading-none transition-transform group-hover:translate-x-1">-&gt;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section aria-labelledby="category-heading" className="bg-[#f7f4ef] py-10 md:py-14">
      <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
        <div className="mb-7 flex flex-col items-center text-center md:mb-9">
          <div className="inline-flex items-center gap-2 text-[#1d3a2d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
            <h2 id="category-heading" className="text-[0.72rem] font-black uppercase tracking-[0.22em] md:text-[0.8rem]">
              Shop by category
            </h2>
            <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
          </div>
          <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#53665c]">
            Explore the perfect fit for every day
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
