export interface CartLineItem {
  id: string;
  productId: string;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

export interface CartState {
  items: CartLineItem[];
  subtotal: number;
  itemCount: number;
}
