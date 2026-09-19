import Link from "next/link";
import { Badge, type BadgeVariant } from "../../../components/common/Badge";
import { EmptyState } from "../../../components/common/EmptyState";
import { customers } from "../../../data/customers";
import { orders } from "../../../data/orders";
import { formatPrice } from "../../../utils/format";

const statusVariant: Record<string, BadgeVariant> = {
  Pending: "warning",
  Confirmed: "neutral",
  Packed: "neutral",
  Shipped: "new",
  Delivered: "success",
  Cancelled: "danger",
};

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default async function MyOrdersPage() {
  const sorted = [...orders].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-10 md:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 text-[#1d3a2d]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
        <h1 className="text-[0.8rem] font-black uppercase tracking-[0.22em]">My Orders</h1>
        <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[#53665c]">
        {sorted.length} {sorted.length === 1 ? "order" : "orders"}
      </p>

      {sorted.length === 0 ? (
        <div className="mt-8 max-w-lg">
          <EmptyState
            title="No orders yet"
            description="Orders you place will show up here with live tracking."
            action={
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl bg-[#1f3855] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45]"
              >
                Start shopping
              </Link>
            }
          />
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {sorted.map((order) => {
            const customer = customers.find((item) => item.id === order.customerId);
            const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
            return (
              <div
                key={order.id}
                className="flex flex-col gap-4 rounded-2xl border border-[#e8e2d6] bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-black uppercase tracking-[-0.02em] text-[#153d30]">{order.id}</p>
                    <Badge variant={statusVariant[order.status] ?? "neutral"}>{order.status}</Badge>
                  </div>
                  <p className="mt-1 text-xs font-medium text-[#6a7a74]">
                    {formatDate(order.createdAt)} · {customer?.name ?? "Customer"} · {itemCount}{" "}
                    {itemCount === 1 ? "item" : "items"}
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <p className="text-sm font-black text-[#153d30]">{formatPrice(order.total)}</p>
                  <Link
                    href={`/my-orders/${order.id}`}
                    className="rounded-xl border border-stone-300 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#1f3855] transition hover:bg-stone-50"
                  >
                    View details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}