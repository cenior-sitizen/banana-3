"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ClaimPage() {
  const searchParams = useSearchParams();
  const voucherId = searchParams.get("voucher");
  const [status, setStatus] = useState<"idle" | "confirming" | "success" | "error">("idle");

  const handleConfirmWithDevice = async () => {
    setStatus("confirming");
    // Simulate Web Authn / device auth; in production would call credential API
    await new Promise((r) => setTimeout(r, 1200));
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
          {voucherId && (
            <p className="mb-4 text-sm font-medium text-accent">Voucher verified</p>
          )}
          <h1 className="text-xl font-semibold text-foreground sm:text-2xl">
            Aid is ready for you
          </h1>
          <p className="mt-2 text-muted">
            Your community fund has released emergency support for your household.
          </p>
          <div className="mt-6 rounded-lg bg-background/80 p-4">
            <p className="text-sm text-muted">Amount</p>
            <p className="text-2xl font-semibold text-foreground">$150.00 USD</p>
          </div>

          {status === "idle" && (
            <>
              <p className="mt-6 text-sm text-muted">
                Confirm with your device to receive this payment. Use your fingerprint, face, or
                device PIN.
              </p>
              <button
                type="button"
                onClick={handleConfirmWithDevice}
                className="mt-6 w-full rounded-full bg-accent py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Confirm with device
              </button>
              <Link
                href="/claim/code"
                className="mt-4 block text-center text-sm font-medium text-accent hover:text-accent-hover"
              >
                I have a code instead
              </Link>
            </>
          )}

          {status === "confirming" && (
            <div className="mt-6 flex flex-col items-center gap-3 py-4">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
              <p className="text-sm text-muted">Confirm on your device…</p>
            </div>
          )}

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
              Something went wrong. Please try again or use a code.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
