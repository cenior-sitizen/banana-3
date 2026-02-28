import Link from "next/link";

const countryBreakdown = [
  {
    country: "Philippines",
    currency: "PHP",
    amount: "₱ 350,000",
    households: 24,
  },
  {
    country: "Malaysia",
    currency: "MYR",
    amount: "RM 85,000",
    households: 13,
  },
  {
    country: "Indonesia",
    currency: "IDR",
    amount: "Rp 420,000,000",
    households: 10,
  },
];

const disasterNews = [
  {
    region: "Philippines",
    type: "Typhoon",
    date: "Feb 2026",
    title: "Typhoon damages coastal communities in Eastern Visayas",
    source: "Local news report",
    url: "https://example.com/philippines-typhoon",
  },
  {
    region: "Malaysia",
    type: "Floods",
    date: "Jan 2026",
    title: "Monsoon flooding forces evacuations across several states",
    source: "Regional climate desk",
    url: "https://example.com/malaysia-floods",
  },
  {
    region: "Indonesia",
    type: "Earthquake",
    date: "Dec 2025",
    title: "Shallow quake impacts rural communities in Sulawesi",
    source: "Disaster monitoring agency",
    url: "https://example.com/indonesia-earthquake",
  },
];

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

      <main className="mx-auto max-w-4xl px-4 py-12 sm:py-16 space-y-10 sm:space-y-12">
        <section className="rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Your impact
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Your share helped 47 people
          </h1>
          <p className="mt-3 text-muted">
            In the latest payout round, your contributions were part of emergency support sent to
            households across Asia. Donors contributed in USD, EUR, and SGD; payouts were made in
            local currencies.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="space-y-4 rounded-xl bg-background/80 p-4">
              <div className="flex justify-between">
                <span className="text-muted">Payout round</span>
                <span className="font-medium text-foreground">Feb 28, 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Households reached</span>
                <span className="font-medium text-foreground">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Trigger</span>
                <span className="font-medium text-foreground">
                  Flood alert — Southeast Asia coastal regions
                </span>
              </div>
            </div>

            <div className="space-y-3 rounded-xl bg-background/80 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                By country (local currencies)
              </p>
              <ul className="space-y-2">
                {countryBreakdown.map((item) => (
                  <li
                    key={item.country}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-foreground">{item.country}</span>
                      <span className="text-xs text-muted">
                        {item.households} households
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {item.amount} {item.currency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 text-xs text-muted">
            No personal data is shared. This summary is generated from the fund&apos;s transparent
            payout rules and country-level totals.
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
        </section>

        <section className="rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Disasters across Asia
          </p>
          <p className="mt-2 text-sm text-muted">
            A snapshot of recent disasters where community-powered emergency funds could deliver
            instant, local-currency payouts.
          </p>

          <ul className="mt-6 space-y-4">
            {disasterNews.map((item) => (
              <li
                key={item.title}
                className="rounded-xl bg-background/80 p-4 sm:flex sm:items-start sm:justify-between"
              >
                <div className="sm:mr-4">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span>
                      {item.region} · {item.type}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-card-border" />
                    <span>{item.date}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Source: {item.source}
                  </p>
                </div>
                <div className="mt-3 sm:mt-0 sm:text-right">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-accent hover:text-accent-hover"
                  >
                    Read article
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
