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

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-[#2a5a2a]">
      <path d="M12 2.6l2 5.4 5.3 2-5.3 2-2 5.4-2-5.4-5.3-2 5.3-2 2-5.4Z" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#f0efe9]">
      <div className="mx-auto grid max-w-[1360px] gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:px-6 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2" aria-label="Uliva home">
            <IconSpark />
            <span className="text-lg font-black uppercase tracking-[0.12em] text-[#163d34]">Uliva</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#53665c]">
            Comfort footwear built for your busiest days. Free shipping on orders over {formatPrice(999)}.
          </p>
        </div>

        {footerLinks.map((group) => (
          <nav key={group.heading} aria-label={group.heading}>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#53665c]">{group.heading}</p>
            <ul className="mt-3 space-y-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#1a2d2e] transition hover:text-[#2f7d3c]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-stone-200">
        <div className="mx-auto max-w-[1360px] px-4 py-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a8a84] md:px-6 lg:px-8">
          © {new Date().getFullYear()} Uliva · Frontend MVP
        </div>
      </div>
    </footer>
  );
}