"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const recipientOptions = [
  {
    id: "PH",
    label: "Philippines",
    currency: "PHP",
    symbol: "₱",
    amount: "7,500.00",
  },
  {
    id: "MY",
    label: "Malaysia",
    currency: "MYR",
    symbol: "RM",
    amount: "1,200.00",
  },
  {
    id: "ID",
    label: "Indonesia",
    currency: "IDR",
    symbol: "Rp",
    amount: "2,300,000",
  },
] as const;

type RecipientId = (typeof recipientOptions)[number]["id"];

export default function ClaimPage() {
  const searchParams = useSearchParams();
  const voucherId = searchParams.get("voucher");
  const [status, setStatus] = useState<"idle" | "confirming" | "success" | "error">("idle");
  const [recipient, setRecipient] = useState<RecipientId>("PH");

  const handleConfirmWithDevice = async () => {
    setStatus("confirming");
    // Simulate Web Authn / device auth; in production would call credential API
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  const selected =
    recipientOptions.find((option) => option.id === recipient) ?? recipientOptions[0];

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
            Your community fund has released emergency support for your household. Payouts are made
            in your local currency.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                Where are you receiving this aid?
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {recipientOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setRecipient(option.id)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      recipient === option.id
                        ? "border-accent bg-accent text-white"
                        : "border-card-border bg-background text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {option.label} ({option.currency})
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-background/80 p-4">
              <p className="text-sm text-muted">
                Amount ({selected.currency}) — converted from donor contributions in USD, EUR, and
                SGD
              </p>
              <p className="mt-2 text-2xl font-semibold text-foreground">
                <span className="mr-1">{selected.symbol}</span>
                {selected.amount}
                <span className="ml-1 text-base font-normal text-muted">
                  {selected.currency}
                </span>
              </p>
            </div>
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
                The amount has been sent to your wallet in {selected.currency}. You can use it right
                away.
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
