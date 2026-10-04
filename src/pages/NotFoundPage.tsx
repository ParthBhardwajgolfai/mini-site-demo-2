import { Link } from "react-router";
import { usePageTitle } from "@/hooks/usePageTitle";

/** 404 — keeps unknown URLs inside the site's light visual language. */
export default function NotFoundPage() {
  usePageTitle("Page Not Found");

  return (
    <section className="flex min-h-[80svh] items-center justify-center px-6" style={{ background: "var(--ivory)" }}>
      <div className="text-center">
        <p className="eyebrow">Lost in the rough</p>
        <h1 className="font-display mt-6 text-6xl font-light tracking-tight md:text-8xl" style={{ color: "var(--ink)" }}>
          404
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          That page isn't on the card. Head back to the clubhouse — the championship continues on the home page.
        </p>
        <Link
          to="/"
          className="mt-10 inline-block px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors"
          style={{ background: "var(--forest)", color: "var(--ivory)" }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
