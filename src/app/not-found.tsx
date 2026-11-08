import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="font-mono text-sm text-accent">{"// 404"}</span>
      <h1 className="font-display text-5xl font-bold tracking-[-0.04em] text-ink md:text-7xl">
        Page not found
      </h1>
      <p className="max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-semibold text-bg"
      >
        Back home
      </Link>
    </main>
  );
}
