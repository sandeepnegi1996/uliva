import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgressBar } from "../components/common/ScrollProgressBar";
import { CartSidebar } from "../components/common/CartSidebar";
import { CursorTrail } from "../components/common/CursorTrail";
import { PageTransition } from "../components/common/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uliva | Comfort Footwear",
  description: "Minimal comfort footwear storefront UI built for Phase 1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgressBar />
        <CartSidebar />
        <CursorTrail />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
