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
  {
    id: "o-103",
    customerId: "c-101",
    items: [
      {
        productId: "p-110",
        productName: "Sunset Pace",
        size: "8",
        color: "Navy",
        quantity: 1,
        price: 3349,
      },
    ],
    total: 3349,
    status: "Pending",
    createdAt: "2026-09-15T09:45:00.000Z",
  },
  {
    id: "o-104",
    customerId: "c-102",
    items: [
      {
        productId: "p-105",
        productName: "Drift Max",
        size: "10",
        color: "Brown",
        quantity: 1,
        price: 3699,
      },
    ],
    total: 3699,
    status: "Packed",
    createdAt: "2026-09-12T18:20:00.000Z",
  },
  {
    id: "o-105",
    customerId: "c-101",
    items: [
      {
        productId: "p-109",
        productName: "City Glide",
        size: "9",
        color: "Black",
        quantity: 1,
        price: 3199,
      },
      {
        productId: "p-104",
        productName: "Carry Light",
        size: "One Size",
        color: "Beige",
        quantity: 2,
        price: 899,
      },
    ],
    total: 4997,
    status: "Delivered",
    createdAt: "2026-08-25T11:10:00.000Z",
  },
  {
    id: "o-106",
    customerId: "c-102",
    items: [
      {
        productId: "p-107",
        productName: "Trail Pilot",
        size: "9",
        color: "Olive",
        quantity: 1,
        price: 4299,
      },
    ],
    total: 4299,
    status: "Cancelled",
    createdAt: "2026-08-18T14:05:00.000Z",
  },
];
