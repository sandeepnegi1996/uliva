export type ProductGender = "Men" | "Women" | "Kids" | "Unisex";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  gender: ProductGender;
  images: string[];
  price: number;
  mrp: number;
  discount: number;
  sizes: string[];
  colors: string[];
  description: string;
  stock: number;
  isNew: boolean;
  isSale: boolean;
}
