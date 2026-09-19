import type { Order } from "../types/order";

export const orders: Order[] = [
  {
    id: "o-101",
    customerId: "c-101",
    items: [
      {
        productId: "p-101",
        productName: "Stride Flex",
        size: "8",
        color: "Black",
        quantity: 1,
        price: 2499,
      },
    ],
    total: 2499,
    status: "Confirmed",
    createdAt: "2026-09-01T10:00:00.000Z",
  },
  {
    id: "o-102",
    customerId: "c-102",
    items: [
      {
        productId: "p-102",
        productName: "Cloud Ease",
        size: "7",
        color: "White",
        quantity: 1,
        price: 2899,
      },
      {
        productId: "p-103",
        productName: "Bounce Kick",
        size: "5",
        color: "Blue",
        quantity: 1,
        price: 1999,
      },
    ],
    total: 4898,
    status: "Shipped",
    createdAt: "2026-09-08T15:30:00.000Z",
  },
];
