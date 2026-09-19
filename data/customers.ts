import type { Customer } from "../types/customer";

export const customers: Customer[] = [
  {
    id: "c-101",
    name: "Aditi Sharma",
    email: "aditi@example.com",
    phone: "+91 98765 43210",
    defaultAddressId: "a-101",
    addresses: [
      {
        id: "a-101",
        label: "Home",
        fullName: "Aditi Sharma",
        phone: "+91 98765 43210",
        line1: "12, Rosewood Apartments",
        line2: "Koramangala 4th Block",
        city: "Bengaluru",
        state: "Karnataka",
        postalCode: "560034",
        country: "India",
      },
    ],
  },
  {
    id: "c-102",
    name: "Rohan Mehta",
    email: "rohan@example.com",
    phone: "+91 91234 56789",
    defaultAddressId: "a-201",
    addresses: [
      {
        id: "a-201",
        label: "Office",
        fullName: "Rohan Mehta",
        phone: "+91 91234 56789",
        line1: "18, Skyline Tower",
        line2: "Andheri East",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400069",
        country: "India",
      },
    ],
  },
];
