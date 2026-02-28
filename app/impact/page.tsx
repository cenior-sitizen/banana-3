import Link from "next/link";

export default function ImpactPage() {
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

      <main className="mx-auto max-w-lg px-4 py-12 sm:py-16">
        <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Your impact
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Your share helped 47 people
          </h1>
          <p className="mt-3 text-muted">
            In the latest payout round, your contributions were part of emergency support sent to 47
            households in the affected area.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between rounded-lg bg-background/80 px-4 py-3">
              <span className="text-muted">Payout round</span>
              <span className="font-medium text-foreground">Feb 28, 2026</span>
            </div>
            <div className="flex justify-between rounded-lg bg-background/80 px-4 py-3">
              <span className="text-muted">Households reached</span>
              <span className="font-medium text-foreground">47</span>
            </div>
            <div className="flex justify-between rounded-lg bg-background/80 px-4 py-3">
              <span className="text-muted">Trigger</span>
              <span className="font-medium text-foreground">Flood alert — Region 4</span>
            </div>
          </div>

          <p className="mt-6 text-xs text-muted">
            No personal data is shared. This summary is generated from the fund’s transparent
            payout rules.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contribute"
              className="rounded-full bg-accent px-6 py-3 text-center text-base font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Contribute again
            </Link>
            <Link
              href="/"
              className="rounded-full border border-card-border bg-card px-6 py-3 text-center text-base font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
