import { useState } from "react";
import { teeTimes } from "@/data/tournament";
import { Flag } from "@/components/Flag";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useGolf";

interface TeeTimesProps {
  /** Hide the section heading when the page header already carries it. */
  showHeading?: boolean;
}

export function TeeTimes({ showHeading = true }: TeeTimesProps) {
  const ref = useReveal<HTMLElement>();
  const rounds = Object.keys(teeTimes);
  const [round, setRound] = useState(rounds[rounds.length - 1]);
  const groups = teeTimes[round];

  const tabsRow = (
    <div className="reveal flex flex-wrap" style={{ border: "1px solid var(--hairline)" }}>
      {rounds.map((r) => (
        <button
          key={r}
          onClick={() => setRound(r)}
          className="px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors"
          style={{
            background: round === r ? "var(--forest)" : "transparent",
            color: round === r ? "var(--ivory)" : "var(--ink-soft)",
          }}
        >
          {r.split(" · ")[0]}
        </button>
      ))}
    </div>
  );

  return (
    <section id="tee-times" ref={ref} className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-24 md:px-10 md:py-36">
      {showHeading ? (
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading index="04" eyebrow="The Draw" title="Tee Times" lede="Official starting times and groupings for every round of the championship, as published by the tour." />
          {tabsRow}
        </div>
      ) : (
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6 md:mb-16">
          <p className="reveal text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
            The official draw · choose a round
          </p>
          {tabsRow}
        </div>
      )}

      <p className="reveal -mt-8 mb-10 font-display text-lg italic" style={{ color: "var(--gold)" }}>
        {round} · all times IST
      </p>

      <div className="grid gap-x-14 md:grid-cols-2" key={round}>
        {groups.map((g, i) => (
          <div key={`${g.match}-${g.time}-${g.tee}`} className="row-in hairline-b group flex gap-8 py-6 transition-colors" style={{ "--i": i } as React.CSSProperties}>
            <div className="w-20 shrink-0">
              <p className="font-display text-2xl font-light tabular" style={{ color: "var(--forest)" }}>
                {g.time}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                Tee {g.tee}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                Match {g.match}
              </p>
              <ul className="mt-2 space-y-1.5">
                {g.players.map((p) => (
                  <li key={p.name} className="flex items-center justify-between gap-4">
                    <span className="text-[15px] font-medium" style={{ color: "var(--ink)" }}>
                      {p.name}
                    </span>
                    <Flag code={p.flag} cc={p.countryCode} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
