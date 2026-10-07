import Link from "next/link";

// Placeholder; styled in Phase 3.
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-4">
        <Link href="/" className="underline">
          Return to the home page
        </Link>
      </p>
    </section>
  );
}
