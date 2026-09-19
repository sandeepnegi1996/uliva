import type { ProductGender } from "../types/product";

export type Category = {
  name: string;
  description: string;
  image: string;
  tone: string;
  accent: string;
  gender: ProductGender;
};

export const categories: Category[] = [
  {
    name: "Men's",
    description: "Everyday pairs with room to move.",
    image: "/Deviate-NITRO™-Elite-3-PROTO-Men's-Running-Shoes.jpg",
    tone: "from-stone-200 via-stone-100 to-stone-50",
    accent: "text-[#f0c96b]",
    gender: "Men",
  },
  {
    name: "Women's",
    description: "Soft steps for full days out.",
    image: "/close-up-futuristic-sneakers.jpg",
    tone: "from-rose-200 via-orange-100 to-stone-50",
    accent: "text-[#f0c96b]",
    gender: "Women",
  },
  {
    name: "Kids",
    description: "Play-ready comfort that keeps up.",
    image: "/one-black-sneaker-shoe-isolated-white.jpg",
    tone: "from-sky-200 via-sky-100 to-stone-50",
    accent: "text-[#f0c96b]",
    gender: "Kids",
  },
  {
    name: "Accessories",
    description: "The finishing touches for easy days.",
    image: "/close-up-futuristic-sneakers.jpg",
    tone: "from-emerald-200 via-emerald-100 to-stone-50",
    accent: "text-[#f0c96b]",
    gender: "Unisex",
  },
];
