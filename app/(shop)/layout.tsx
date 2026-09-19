import type { ReactNode } from "react";
import { Suspense } from "react";
import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";
import { NewsletterBanner } from "../../components/common/NewsletterBanner";
import { CartSidebar } from "../../components/common/CartSidebar";

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <NewsletterBanner />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
}
