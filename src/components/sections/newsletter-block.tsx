"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterBlock() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/forms/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent: true }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-on-dark tracking-tight">
          Stay Updated
        </h2>
        <p className="mt-3 text-text-on-dark/50 max-w-md mx-auto">
          Get the latest news about exhibitors, conference programme, and event updates.
        </p>

        {status === "success" ? (
          <div className="mt-6 flex items-center justify-center gap-2 text-green-400 font-medium">
            <Check className="w-5 h-5" />
            You&apos;re subscribed! We&apos;ll keep you posted.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
            <div className="flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 rounded-[var(--radius-md)] bg-white/10 border border-white/20 text-text-on-dark placeholder:text-text-on-dark/30 focus:border-red focus:outline-none focus:ring-2 focus:ring-red/30 text-sm"
              />
              <Button
                type="submit"
                loading={status === "loading"}
                size="md"
                className="h-12 px-6"
              >
                {status !== "loading" && <Send className="w-4 h-4" />}
                {status !== "loading" && <span className="hidden sm:inline">Subscribe</span>}
              </Button>
            </div>
            <p className="mt-3 text-xs text-text-on-dark/30">
              By subscribing you agree to our{" "}
              <Link href="/privacy-policy" className="underline hover:text-text-on-dark/50">Privacy Policy</Link>.
            </p>
            {status === "error" && (
              <p className="mt-2 text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute -left-[9999px] w-0 h-0 overflow-hidden"
              autoComplete="off"
            />
          </form>
        )}
      </div>
    </section>
  );
}
