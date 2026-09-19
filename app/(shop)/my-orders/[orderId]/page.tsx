import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, type BadgeVariant } from "../../../../components/common/Badge";
import { customers } from "../../../../data/customers";
import { orders } from "../../../../data/orders";
import { formatPrice } from "../../../../utils/format";

const statusVariant: Record<string, BadgeVariant> = {
  Pending: "warning",
  Confirmed: "neutral",
  Packed: "neutral",
  Shipped: "new",
  Delivered: "success",
  Cancelled: "danger",
};

export default async function OrderDetailsPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const order = orders.find((item) => item.id === orderId);
  if (!order) notFound();

  const customer = customers.find((item) => item.id === order.customerId);
  const totalQuantity = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="mx-auto w-full max-w-[1000px] px-4 py-8 md:px-6 lg:px-8">
      <Link
        href="/my-orders"
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#2f7d3c] transition hover:text-[#1a2d2e]"
      >
        <span aria-hidden="true">&larr;</span> Back to my orders
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-black uppercase tracking-[-0.05em] text-[#153d30]">{order.id}</h1>
        <Badge variant={statusVariant[order.status] ?? "neutral"}>{order.status}</Badge>
      </div>
      <p className="mt-2 text-sm font-medium text-[#6a7a74]">
        Placed on{" "}
        {new Date(order.createdAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · {customer?.name ?? "Customer"} · {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px]">
        <ul className="space-y-3">
          {order.items.map((item) => (
            <li key={`${item.productId}-${item.size}-${item.color}`} className="flex items-center justify-between gap-4 rounded-2xl border border-[#e8e2d6] bg-white p-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#153d30]">{item.productName}</p>
                <p className="mt-1 text-xs font-medium text-[#6a7a74]">
                  Size {item.size} · {item.color} · Qty {item.quantity}
                </p>
              </div>
              <p className="text-sm font-black text-[#153d30]">{formatPrice(item.price * item.quantity)}</p>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-[#e8e2d6] bg-white p-5">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67]">Order total</p>
          <p className="mt-1 text-2xl font-black text-[#153d30]">{formatPrice(order.total)}</p>
          <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#5d6c67]">Status</p>
          <p className="mt-1 text-sm font-bold text-[#1a2d2e]">
            {order.status === "Cancelled"
              ? "This order was cancelled."
              : `Your order is ${order.status.toLowerCase()}.`}
          </p>
          <p className="mt-4 text-xs font-medium leading-relaxed text-[#6a7a74]">
            Full order tracking timeline and cancellation details arrive in Phase 18.
          </p>
          <Link
            href="/products"
            className="mt-5 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-[#1f3855] transition hover:bg-stone-50"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}