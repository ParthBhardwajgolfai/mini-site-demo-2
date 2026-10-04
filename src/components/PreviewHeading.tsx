import { Link } from "react-router";
import { useReveal } from "@/hooks/useGolf";

interface PreviewHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
  ctaTo?: string;
  ctaLabel?: string;
  /** Light or dark section — adjusts text colours. */
  tone?: "light" | "dark";
}

/** Header row for a homepage preview block: editorial title on the left,
 *  "View all →" link on the right. Mirrors the reference site's pattern. */
export function PreviewHeading({ eyebrow, title, lede, ctaTo, ctaLabel, tone = "light" }: PreviewHeadingProps) {
  const ref = useReveal<HTMLDivElement>();
  const gold = "var(--gold-soft)";
  const titleColor = tone === "dark" ? "#fff" : "var(--ink)";
  const ledeColor = tone === "dark" ? "rgba(250,248,241,0.6)" : "var(--ink-soft)";

  return (
    <div ref={ref} className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
      <div className="max-w-2xl">
        <p className="reveal text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: tone === "dark" ? gold : "var(--gold)" }}>
          {eyebrow}
        </p>
        <h2
          className="reveal font-display mt-4 text-3xl font-light leading-[1.06] tracking-tight md:text-5xl"
          style={{ "--reveal-delay": "80ms", color: titleColor } as React.CSSProperties}
        >
          {title}
        </h2>
        {lede && (
          <p className="reveal mt-4 text-base leading-relaxed" style={{ "--reveal-delay": "140ms", color: ledeColor } as React.CSSProperties}>
            {lede}
          </p>
        )}
      </div>
      {ctaTo && ctaLabel && (
        <Link
          to={ctaTo}
          className="reveal group inline-flex shrink-0 items-center gap-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors"
          style={{
            "--reveal-delay": "160ms",
            color: tone === "dark" ? gold : "var(--forest)",
            borderBottom: "1px solid transparent",
          } as React.CSSProperties}
        >
          {ctaLabel}
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
