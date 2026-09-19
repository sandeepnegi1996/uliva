"use client";

import { useState } from "react";
import { Button } from "../common/Button";

export function NewsletterBanner() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-[#1f3855] dark:bg-[#153d30]" aria-label="Newsletter signup">
      <div className="mx-auto max-w-[1360px] px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-lg font-black uppercase tracking-[-0.03em] text-white font-display">
              Stay in the loop
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Get early access to new drops and exclusive offers
            </p>
          </div>
          {subscribed ? (
            <p className="text-sm font-bold text-[#90c86a]" aria-live="polite">✓ You're subscribed! Check your inbox.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[#90c86a] focus:outline-none focus:ring-2 focus:ring-[#90c86a]/40 dark:bg-white/5 dark:placeholder:text-white/30"
              />
              <Button type="submit" variant="primary" size="sm">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
