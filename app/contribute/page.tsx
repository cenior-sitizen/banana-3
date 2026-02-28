"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContributePage() {
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || Number.isNaN(Number(amount)) || Number(amount) <= 0) return;
    setStatus("submitting");
    // Simulate redirect to wallet / Open Payments flow
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <header className="sticky top-0 z-50 border-b border-card-border bg-background/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
            Community Emergency Fund
          </Link>
          <Link href="/" className="text-sm font-medium text-muted hover:text-foreground">
            Home
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-md px-4 py-12 sm:py-16">
        <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8">
          <h1 className="text-xl font-semibold text-foreground sm:text-2xl">
            Contribute to the fund
          </h1>
          <p className="mt-2 text-muted">
            Your contribution goes into the community pool. When a disaster is declared, the fund
            automatically sends aid to affected members.
          </p>

          {status === "idle" || status === "submitting" ? (
            <form onSubmit={handleSubmit} className="mt-8">
              <label htmlFor="amount" className="block text-sm font-medium text-foreground">
                Amount (USD)
              </label>
              <input
                id="amount"
                type="number"
                min="1"
                step="1"
                placeholder="e.g. 20"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-2 w-full rounded-lg border border-card-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />

              <fieldset className="mt-6">
                <legend className="text-sm font-medium text-foreground">Frequency</legend>
                <div className="mt-2 flex gap-4">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="frequency"
                      checked={frequency === "monthly"}
                      onChange={() => setFrequency("monthly")}
                      className="h-4 w-4 border-card-border text-accent focus:ring-accent"
                    />
                    <span className="text-foreground">Monthly</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="frequency"
                      checked={frequency === "once"}
                      onChange={() => setFrequency("once")}
                      className="h-4 w-4 border-card-border text-accent focus:ring-accent"
                    />
                    <span className="text-foreground">One-time</span>
                  </label>
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={status === "submitting" || !amount.trim()}
                className="mt-8 w-full rounded-full bg-accent py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
              >
                {status === "submitting"
                  ? "Redirecting to your wallet…"
                  : "Continue to wallet"}
              </button>
            </form>
          ) : null}

          {status === "success" && (
            <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/30">
              <p className="font-medium text-green-800 dark:text-green-200">Next step</p>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                In a full implementation you would be redirected to your wallet to approve the
                payment. After you contribute, you’ll get impact updates like how many people your
                share helped.
              </p>
              <Link
                href="/impact"
                className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-hover"
              >
                See example impact receipt
              </Link>
              <Link
                href="/"
                className="mt-2 block text-sm font-medium text-muted hover:text-foreground"
              >
                Back to home
              </Link>
            </div>
          )}

          {status === "error" && (
            <p className="mt-6 text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
