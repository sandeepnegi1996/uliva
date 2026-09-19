import type { ReactNode } from "react";
import { Suspense } from "react";
import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}