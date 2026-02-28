"use client";

import Link from "next/link";
import { useState } from "react";

export default function ClaimCodePage() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setStatus("submitting");
    // Simulate API call to validate code and complete payout
    await new Promise((r) => setTimeout(r, 1500));
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
            Enter your code
          </h1>
          <p className="mt-2 text-muted">
            We sent you a code by SMS or voice call. Enter it below to receive your aid.
          </p>

          {status === "idle" || status === "submitting" ? (
            <form onSubmit={handleSubmit} className="mt-6">
              <label htmlFor="code" className="block text-sm font-medium text-foreground">
                Code
              </label>
              <input
                id="code"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="e.g. 847291"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="mt-2 w-full rounded-lg border border-card-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                disabled={status === "submitting" || !code.trim()}
                className="mt-6 w-full rounded-full bg-accent py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-50"
              >
                {status === "submitting" ? "Verifying…" : "Receive aid"}
              </button>
            </form>
          ) : null}

          {status === "success" && (
            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/30">
              <p className="font-medium text-green-800 dark:text-green-200">Payment sent</p>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                The amount has been sent to your wallet. You can use it right away.
              </p>
              <Link
                href="/"
                className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-hover"
              >
                Back to home
              </Link>
            </div>
          )}

          {status === "error" && (
            <p className="mt-6 text-sm text-red-600 dark:text-red-400">
              Invalid or expired code. Please check and try again.
            </p>
          )}

          <Link
            href="/claim"
            className="mt-6 block text-center text-sm font-medium text-muted hover:text-foreground"
          >
            Confirm with device instead
          </Link>
        </div>
      </main>
    </div>
  );
}
