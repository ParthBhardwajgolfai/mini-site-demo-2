import { navLinks, tournament } from "@/data/tournament";

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)" }}>
      {/* marquee */}
      <div className="overflow-hidden py-10" style={{ borderBottom: "1px solid rgba(250,248,241,0.1)" }}>
        <div className="marquee-track flex w-max whitespace-nowrap">
          {[0, 1].map((n) => (
            <span key={n} className="font-display px-6 text-4xl font-light italic tracking-tight md:text-5xl" style={{ color: "rgba(250,248,241,0.25)" }}>
              {tournament.name} · {tournament.dates} · {tournament.venue} · {tournament.purse} ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src="/images/golfai-logo.png" alt="GolfAI" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: "rgba(250,248,241,0.45)" }}>
              The official tournament platform for professional golf. Every championship, every round, every score — presented with the care the game deserves.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "rgba(250,248,241,0.35)" }}>
              Tournament
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.slice(0, 4).map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(250,248,241,0.6)" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "rgba(250,248,241,0.35)" }}>
              Championship
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.slice(4).map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(250,248,241,0.6)" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(250,248,241,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(250,248,241,0.35)" }}>
            © 2026 {tournament.brand} Tournaments · {tournament.name}
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "rgba(250,248,241,0.35)" }}>
            {tournament.venue} · {tournament.city}
          </p>
        </div>
        <p className="mt-6 text-[10px] leading-relaxed" style={{ color: "rgba(250,248,241,0.25)" }}>
          Mock frontend for demonstration only · Scores, draws, entry list, prize money, news and imagery extracted from the official DP World PGTI tournament page (pgtofindia.com, tournament 461).
        </p>
      </div>
    </footer>
  );
}
