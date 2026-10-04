import { Link } from "react-router";
import { partners } from "@/data/tournament";
import { useReveal } from "@/hooks/useGolf";

export function Partners() {
  const ref = useReveal<HTMLElement>();
  const tourPartners = partners.filter((p) => p.tier === "tour");

  return (
    <section id="partners" ref={ref} className="py-16 md:py-20" style={{ background: "var(--ivory-deep)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="reveal mb-10 flex items-center gap-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
            Tour Partners
          </span>
          <span className="h-px flex-1" style={{ background: "var(--hairline)" }} />
          <Link
            to="/partners"
            className="group inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors"
            style={{ color: "var(--forest)" }}
          >
            View All Partners
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:justify-between">
          {tourPartners.map((p) => (
            <div
              key={p.src}
              className="reveal flex items-center justify-center rounded-sm px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid var(--hairline)",
                "--reveal-delay": `${(tourPartners.indexOf(p) % 5) * 60}ms`,
              } as React.CSSProperties}
            >
              <img
                src={p.src}
                alt={p.alt}
                title={p.alt}
                loading="lazy"
                className="w-auto object-contain"
                style={{ height: p.compact ? 26 : 44, maxWidth: p.compact ? 110 : 190 }}
              />
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-[10px] uppercase tracking-[0.25em]" style={{ color: "var(--ink-faint)" }}>
          Partnered with the DP World PGTI for the {`Indorama Ventures Open Golf Championship`}
        </p>
      </div>
    </section>
  );
}
