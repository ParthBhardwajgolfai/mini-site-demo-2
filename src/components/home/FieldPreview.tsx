import { useState } from "react";
import { field, countryStats, tournament } from "@/data/tournament";
import { Flag } from "@/components/Flag";
import { PreviewHeading } from "@/components/PreviewHeading";
import { ViewAll } from "@/components/ViewAll";
import { useReveal } from "@/hooks/useGolf";

const INITIAL = 12;
const STEP = 12;
const MAX_PREVIEW = 24;

/** Homepage field preview — a compact card grid that grows once via
 *  "Load More"; the complete 265-player entry list lives on /players. */
export function FieldPreview() {
  const ref = useReveal<HTMLElement>();
  const [visible, setVisible] = useState(INITIAL);
  const players = field.slice(0, visible);
  const canLoadMore = visible < MAX_PREVIEW;

  return (
    <section ref={ref} className="scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <PreviewHeading
          eyebrow="The Players"
          title="The field at Kalhaar"
          lede={`${tournament.entries} entries, ${tournament.fieldSize} professionals, ${countryStats.length} countries — the full entry list as published by the DP World PGTI.`}
          ctaTo="/players"
          ctaLabel="View All Players"
        />

        {/* country strip */}
        <div className="reveal mb-10 flex flex-wrap items-center gap-x-7 gap-y-3" style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
          {countryStats.map((c) => (
            <span key={c.country} className="inline-flex items-center gap-2 text-xs" style={{ color: "var(--ink-soft)" }}>
              <Flag code={c.flag} cc={c.country} />
              {c.country}
              <span className="tabular" style={{ color: "var(--forest)" }}>
                {c.count}
              </span>
            </span>
          ))}
        </div>

        {/* player cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" key={visible}>
          {players.map((p, i) => (
            <div
              key={`${p.seed}-${p.name}`}
              className="row-in flex items-center gap-4 border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(185,154,85,0.45)]"
              style={{
                "--i": Math.min(i, 24),
                background: "rgba(255,255,255,0.55)",
                borderColor: "var(--hairline)",
              } as React.CSSProperties}
            >
              <span className="tabular w-7 shrink-0 text-sm" style={{ color: "var(--ink-faint)" }}>
                {p.seed}
              </span>
              <Flag code={p.flag} cc={p.countryCode} className="h-3.5 w-auto" />
              <div className="min-w-0">
                <p className="truncate text-[14px] font-medium" style={{ color: "var(--ink)" }}>{p.name}</p>
                <p className="mt-0.5 truncate text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--ink-faint)" }}>{p.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* progressive loading + CTA */}
        <div className="reveal mt-12 flex flex-col items-center gap-6">
          {canLoadMore && (
            <button
              onClick={() => setVisible((v) => Math.min(v + STEP, MAX_PREVIEW))}
              className="border px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[rgba(29,69,49,0.05)]"
              style={{ borderColor: "rgba(23,26,21,0.35)", color: "var(--ink)" }}
            >
              Load More Players
            </button>
          )}
          <p className="text-[11px] uppercase tracking-[0.25em]" style={{ color: "var(--ink-faint)" }}>
            Showing {players.length} of {field.length} entries · {tournament.fieldSize} teed it up · {tournament.madeCut} made the cut
          </p>
          <ViewAll to="/players" variant="outline">
            View All Players
          </ViewAll>
        </div>
      </div>
    </section>
  );
}
