import Link from "next/link";
import { formatPrice } from "../../utils/format";

const footerLinks = [
  {
    heading: "Shop",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Men", href: "/products?gender=Men" },
      { label: "Women", href: "/products?gender=Women" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "My Orders", href: "/my-orders" },
      { label: "Cart", href: "/cart" },
      { label: "Checkout", href: "/checkout" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#f0efe9] dark:border-stone-700 dark:bg-[#1e2520]">
      <div className="mx-auto grid max-w-[1360px] gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:px-6 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="Uliva home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#153d30] to-[#2f7d3c] text-xl font-black italic text-[#d9f39b] shadow-inner shadow-white/20">
              U
            </div>
            <span className="text-xl font-black uppercase tracking-[0.05em] text-[#163d34] dark:text-[#c4e0a8] font-display">Uliva</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#53665c] dark:text-[#8a9a94]">
            Comfort footwear built for your busiest days. Free shipping on orders over {formatPrice(999)}.
          </p>
        </div>

        {footerLinks.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#53665c] dark:text-[#8a9a94]">{group.heading}</p>
            <ul className="mt-3 space-y-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#1a2d2e] transition hover:text-[#2f7d3c] dark:text-[#8a9a94] dark:hover:text-[#90c86a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-stone-200 dark:border-stone-700">
        <div className="mx-auto max-w-[1360px] px-4 py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a8a84] dark:text-[#6a7a74] md:px-6 lg:px-8">
          © {new Date().getFullYear()} Uliva · Frontend MVP
        </div>
      </div>
    </footer>
  );
}
