import { tournament, facts, champion, countryStats } from "@/data/tournament";
import { SectionHeading } from "@/components/SectionHeading";
import { CountUp } from "@/components/CountUp";
import { useReveal, useParallax } from "@/hooks/useGolf";

const overviewStats = [
  { label: "Entries received", value: tournament.entries, suffix: "" },
  { label: "Players teed it up", value: tournament.fieldSize, suffix: "" },
  { label: "Countries represented", value: countryStats.length, suffix: "" },
  { label: "Total purse (US$)", value: 300000, suffix: "" },
];

export function Overview() {
  const ref = useReveal<HTMLElement>();
  const parallaxRef = useParallax(0.12);

  return (
    <section id="overview" ref={ref} className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-24 md:px-10 md:py-36">
      <SectionHeading
        index="01"
        eyebrow="The Championship"
        title="Where the plains of Gujarat meet championship golf"
        lede="The championship returns to Kalhaar Blues & Greens with a US$300,000 purse, a deep international field, and four days of stroke play on the DP World PGTI calendar."
      />

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        {/* image column */}
        <div className="lg:col-span-5" ref={parallaxRef}>
          <div className="cine-frame relative aspect-[4/5] overflow-hidden">
            <img data-parallax src="/images/overview.jpg" alt="Professional golfer mid-swing" className="h-full w-full object-cover" />
          </div>
          <p className="reveal mt-4 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
            The press conference · Veer Ahlawat, Matthias Schwab, Yuvraj Sandhu with tour and title officials
          </p>
        </div>

        {/* text column */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="reveal space-y-6 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            <p className="font-display text-2xl md:text-[28px] leading-snug" style={{ color: "var(--ink)" }}>
              {tournament.entries} entries, {tournament.fieldSize} professionals from {countryStats.length} countries. Four rounds. One champion crowned beside the waters of Ahmedabad.
            </p>
            <p>
              Played as a 72-hole stroke-play championship over the {tournament.yardage.toLocaleString("en-IN")}-yard Kalhaar Blues &amp; Greens layout, the tournament cut to {tournament.cutRule.toLowerCase()}. Saptak Talwar closed with a steady final round of 70 to win at {champion.score} — a bogey-free Sunday that also carried him to the top of the DP World PGTI Order of Merit.
            </p>
            <p>
              Rashid Khan set the early pace with a six-under 66 on day one, Jhared Hack and Brijesh Kumar shared the 36-hole lead, and Manu Gandas fired the third day's lowest round — before Talwar, two clear overnight alongside Dhruv Sheoran, sealed his second DP World PGTI title with {tournament.purse} on the line.
            </p>
          </div>

          <dl className="reveal mt-12 space-y-0" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {[
              ["Format", tournament.format],
              ["Field", `${tournament.fieldSize} professionals · ${tournament.entries} entries`],
              ["Cut", tournament.cutRule],
              ["Champion", `${champion.name} · ${champion.score} (${facts.madeCut} made the cut)`],
              ["Tour", "DP World PGTI · Order of Merit event"],
            ].map(([k, v]) => (
              <div key={k} className="hairline-b flex items-baseline justify-between gap-6 py-4">
                <dt className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                  {k}
                </dt>
                <dd className="text-right text-[15px] font-medium" style={{ color: "var(--ink)" }}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* count-up stats */}
      <div className="mt-24 grid grid-cols-2 gap-y-12 border-y py-12 md:grid-cols-4" style={{ borderColor: "var(--hairline)" }}>
        {overviewStats.map((s, i) => (
          <div key={s.label} className="reveal text-center" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}>
            <p className="font-display text-5xl font-light md:text-6xl" style={{ color: "var(--forest)" }}>
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
