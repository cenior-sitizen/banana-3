export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-card-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="text-lg font-semibold tracking-tight text-foreground">
            Community Emergency Fund
          </a>
          <div className="flex items-center gap-6">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              How it works
            </a>
            <a
              href="#get-started"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Get started
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(234,88,12,0.12),transparent)]" />
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">
              Interledger Foundation 2026 Challenge
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Community-powered emergency funds with{" "}
              <span className="text-accent">instant money payouts</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              Collect small, recurring contributions in advance. When disasters strike, release
              financial support automatically—no manual coordination, no waiting. Powered by Open
              Payments.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Build your fund
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-card-border bg-card px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-y border-card-border bg-card/50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Aid is often slow, fragmented, and hard to access
            </h2>
            <p className="mt-4 text-muted">
              When floods, typhoons, or earthquakes hit, communities already support each
              other—neighbors, workplaces, diaspora groups, schools. But pooling money informally
              doesn&apos;t scale. We need digital infrastructure that lets communities prepare ahead
              and trigger <strong className="text-foreground">instant, programmable payouts</strong>{" "}
              when it matters most.
            </p>
          </div>
        </section>

        {/* How it works / Features */}
        <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
              How it works
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
              A programmable platform that turns community contributions into automatic aid.
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Recurring micro-contributions</h3>
                <p className="mt-2 text-sm text-muted">
                  Members contribute small amounts regularly via Open Payments—no big lump sums, just
                  steady community savings.
                </p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Verified disaster triggers</h3>
                <p className="mt-2 text-sm text-muted">
                  Payouts start automatically when trusted signals fire—flood alerts, earthquake
                  data, or location-based triggers—so aid reaches people fast.
                </p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Programmable distribution</h3>
                <p className="mt-2 text-sm text-muted">
                  Clear, transparent rules: equal split, severity-based, household size, or capped
                  payouts—defined by the community, executed by code.
                </p>
              </div>
              <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Governance &amp; privacy</h3>
                <p className="mt-2 text-sm text-muted">
                  Members vote on thresholds, allocation rules, and trigger definitions. Identity and
                  financial data stay protected with consent-based systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Payments / Interledger */}
        <section className="border-t border-card-border bg-card/30 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              Built on Open Payments
            </h2>
            <p className="mt-4 text-muted">
              This platform uses Open Payments and the Interledger Protocol so money moves
              instantly, across borders and systems, with transparent rules. Communities own the
              logic; the network handles the transfer.
            </p>
            <a
              href="https://interledger.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
            >
              Learn about Interledger
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* CTA */}
        <section id="get-started" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl border border-card-border bg-card p-8 text-center shadow-lg sm:p-12">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Ready to build your community fund?
            </h2>
            <p className="mt-4 text-muted">
              Design a programmable emergency fund that collects micro-contributions and disburses
              aid automatically when disasters strike.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Get started
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            Community Emergency Fund · Interledger Foundation 2026 Challenge
          </p>
          <a
            href="https://interledger.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            interledger.org
          </a>
        </div>
      </footer>
    </div>
  );
}
