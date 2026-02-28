"use client";

import Link from "next/link";
import { useState } from "react";

// Placeholder QR: in production would use a QR library (e.g. qrcode.react) with claim URL
function QRPlaceholder({ value }: { value: string }) {
  return (
    <div
      className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-card-border bg-background/50 text-xs text-muted"
      title={value}
    >
      QR
    </div>
  );
}

const MOCK_VOUCHERS = [
  { id: "v1", household: "Household 1", code: "847291", link: "/claim?voucher=v1" },
  { id: "v2", household: "Household 2", code: "392817", link: "/claim?voucher=v2" },
  { id: "v3", household: "Household 3", code: "561042", link: "/claim?voucher=v3" },
  { id: "v4", household: "Household 4", code: "928364", link: "/claim?voucher=v4" },
  { id: "v5", household: "Household 5", code: "104857", link: "/claim?voucher=v5" },
];

export default function LeadVouchersPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyLink = (link: string, id: string) => {
    const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${link}` : link;
    void navigator.clipboard.writeText(fullUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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

      <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Community lead
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-foreground">
            Payout vouchers
          </h1>
          <p className="mt-2 text-muted">
            Hand out one voucher per household. Recipients can scan the QR or open the link to
            receive their aid. Each voucher is one-time use.
          </p>
        </div>

        <div className="rounded-xl border border-card-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-card-border pb-3">
            <span className="text-sm font-medium text-muted">Payout round</span>
            <span className="text-sm font-medium text-foreground">Feb 28, 2026 — Flood alert</span>
          </div>

          <ul className="divide-y divide-card-border">
            {MOCK_VOUCHERS.map((v) => (
              <li key={v.id} className="flex items-center gap-4 py-4 first:pt-4 last:pb-0">
                <QRPlaceholder value={v.link} />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground">{v.household}</p>
                  <p className="text-sm text-muted">Code: {v.code}</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => copyLink(v.link, v.id)}
                    className="rounded-full border border-card-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                  >
                    {copiedId === v.id ? "Copied" : "Copy link"}
                  </button>
                  <Link
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                  >
                    Open
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-muted">
          Recipients can also receive aid by entering the code at{" "}
          <Link href="/claim/code" className="font-medium text-accent hover:text-accent-hover">
            claim with code
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
