import { Link } from "react-router";
import { tournament } from "@/data/tournament";
import { siteNav } from "@/data/nav";

export function Footer() {
  return (
    <footer style={{ background: "var(--ivory-deep)" }}>
      {/* marquee */}
      <div className="overflow-hidden py-10" style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[0, 1].map((n) => (
            <span key={n} className="font-display px-6 text-4xl font-light italic tracking-tight md:text-5xl" style={{ color: "rgba(23,26,21,0.22)" }}>
              {tournament.name} · {tournament.dates} · {tournament.venue} · {tournament.purse} ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-block">
              <img src="/images/golfai-logo.png" alt="GolfAI" className="h-12 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              The official tournament platform for professional golf. Every championship, every round, every score — presented with the care the game deserves.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "var(--ink-faint)" }}>
              Tournament
            </p>
            <ul className="mt-5 space-y-3">
              {siteNav.slice(1, 5).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm transition-colors hover:text-[color:var(--forest)]" style={{ color: "var(--ink-soft)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "var(--ink-faint)" }}>
              Championship
            </p>
            <ul className="mt-5 space-y-3">
              {siteNav.slice(5).map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm transition-colors hover:text-[color:var(--forest)]" style={{ color: "var(--ink-soft)" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--hairline)" }}>
          <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
            © 2026 {tournament.brand} Tournaments · {tournament.name}
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "var(--ink-faint)" }}>
            {tournament.venue} · {tournament.city}
          </p>
        </div>
        <p className="mt-6 text-[10px] leading-relaxed" style={{ color: "rgba(23,26,21,0.28)" }}>
          Mock frontend for demonstration only · Scores, draws, entry list, prize money, news and imagery extracted from the official DP World PGTI tournament page (pgtofindia.com, tournament 461).
        </p>
      </div>
    </footer>
  );
}
