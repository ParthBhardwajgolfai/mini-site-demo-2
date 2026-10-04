import { roundStandings, teeTimes, tournament, champion, type RoundStandingRow } from "@/data/tournament";
import { Flag } from "@/components/Flag";
import { PreviewHeading } from "@/components/PreviewHeading";
import { ViewAll } from "@/components/ViewAll";
import { useReveal } from "@/hooks/useGolf";

interface ScheduleHighlightsProps {
  /** Show the "View full schedule" CTA (hidden when embedded on /schedule). */
  cta?: boolean;
}

/** Cumulative totals below par×rounds−12 are extraction artifacts, not real
 *  standings — exclude them before picking a round's leader(s). */
function saneLeaders(rows: RoundStandingRow[] | undefined, roundNo: number): RoundStandingRow[] {
  if (!rows) return [];
  const floor = tournament.par * roundNo - 12;
  const sane = rows.filter((r) => r.cumTotal >= floor && /^[E+-]/.test(r.toPar));
  if (sane.length === 0) return [];
  const best = Math.min(...sane.map((r) => r.cumTotal));
  return sane.filter((r) => r.cumTotal === best);
}

/** Round-by-round week strip. Each card pairs the round's date (from the
 *  official draw) with its leader(s) through that round (from the round
 *  standings); the final card shows the champion. */
export function ScheduleHighlights({ cta = true }: ScheduleHighlightsProps) {
  const ref = useReveal<HTMLElement>();

  const keys = Object.keys(teeTimes);
  const rounds = keys.map((key, i) => {
    const [label, date] = key.split(" · ");
    const isFinal = i === keys.length - 1;
    return {
      key,
      label: isFinal ? "Final Round" : label,
      date,
      leaders: isFinal
        ? []
        : saneLeaders(roundStandings[label as keyof typeof roundStandings], i + 1),
      groups: teeTimes[key].length,
      isFinal,
    };
  });

  return (
    <section ref={ref} className="scroll-mt-24 py-24 md:py-36" style={{ background: "var(--ivory-deep)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <PreviewHeading
          eyebrow="The Week"
          title="Four days, one championship"
          lede={`${tournament.format} · all starting times IST`}
          ctaTo={cta ? "/schedule" : undefined}
          ctaLabel={cta ? "View Full Schedule" : undefined}
        />

        <div className="grid gap-4 md:grid-cols-4">
          {rounds.map((r, i) => (
            <div
              key={r.key}
              className="reveal flex flex-col gap-6 border p-8"
              style={{
                background: r.isFinal ? "var(--forest)" : "var(--ivory)",
                borderColor: r.isFinal ? "var(--forest)" : "var(--hairline)",
                "--reveal-delay": `${i * 90}ms`,
              } as React.CSSProperties}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: r.isFinal ? "var(--gold-soft)" : "var(--gold)" }}
                >
                  {r.label}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em]" style={{ color: r.isFinal ? "rgba(250,248,241,0.55)" : "var(--ink-faint)" }}>
                  {r.date}
                </p>
              </div>

              {r.isFinal ? (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "rgba(250,248,241,0.5)" }}>
                    Champion
                  </p>
                  <p className="font-display mt-2 flex items-center gap-2 text-xl italic" style={{ color: "#fff" }}>
                    {champion.name}
                    <Flag code={champion.flag} cc={champion.countryCode} />
                  </p>
                  <p className="tabular mt-1 text-sm font-semibold" style={{ color: "var(--gold-soft)" }}>
                    {champion.total} · {champion.score}
                  </p>
                </div>
              ) : r.leaders.length > 0 ? (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                    {r.leaders.length > 1 ? "Shared the lead" : "Led after the round"}
                  </p>
                  <p className="font-display mt-2 text-xl italic" style={{ color: "var(--ink)" }}>
                    {r.leaders.slice(0, 2).map((l, li) => (
                      <span key={l.player} className="inline-flex items-center gap-2">
                        {li > 0 && <span className="not-italic" style={{ color: "var(--ink-faint)" }}>·</span>}
                        {l.player}
                        <Flag code={l.flag} cc={l.countryCode} className="h-3 w-auto" />
                      </span>
                    ))}
                  </p>
                  <p className="tabular mt-1 text-sm font-semibold" style={{ color: "var(--forest)" }}>
                    {r.leaders[0].cumTotal} · {r.leaders[0].toPar}
                  </p>
                </div>
              ) : (
                <p className="text-sm" style={{ color: "var(--ink-faint)" }}>
                  Draw published · {r.groups} groups
                </p>
              )}

              <p className="mt-auto text-[10px] uppercase tracking-[0.2em]" style={{ color: r.isFinal ? "rgba(250,248,241,0.4)" : "var(--ink-faint)" }}>
                {r.groups} groups · two tees
              </p>
            </div>
          ))}
        </div>

        {cta && (
          <div className="reveal mt-12 flex justify-center">
            <ViewAll to="/schedule">View Full Schedule</ViewAll>
          </div>
        )}
      </div>
    </section>
  );
}
