import { Suspense } from "react";

export default function ClaimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<ClaimFallback />}>{children}</Suspense>;
}

function ClaimFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center bg-background">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}
