import Link from "next/link";
import type { ReactNode } from "react";
import { EmptyState } from "../common/EmptyState";

export interface PlaceholderPageProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function PlaceholderPage({ title, description, action }: PlaceholderPageProps) {
  return (
    <section className="mx-auto w-full max-w-[1360px] px-4 py-12 md:px-6 lg:px-8">
      <header className="mb-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 text-[#1d3a2d]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
          <span className="text-[0.72rem] font-black uppercase tracking-[0.22em]">Uliva</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#6e9d50]" />
        </div>
        <h1 className="mt-2 text-3xl font-black uppercase tracking-[-0.05em] text-[#153d30]">{title}</h1>
      </header>
      <div className="mx-auto max-w-lg">
        <EmptyState
          title={`${title} is on its way`}
          description={description}
          action={
            action ?? (
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-[#1f3855] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#132b45]"
              >
                Back to home
              </Link>
            )
          }
        />
      </div>
    </section>
  );
}