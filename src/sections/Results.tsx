import { results, champion, tournament } from "@/data/tournament";
import { Flag } from "@/components/Flag";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useGolf";

export function Results() {
  const ref = useReveal<HTMLElement>();
  const rest = results.slice(1);

  return (
    <section id="results" ref={ref} className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-24 md:px-10 md:py-36">
      <SectionHeading
        index="06"
        eyebrow="Final Standings"
        title="Results"
        lede="Official final results following the completion of the fourth round on Sunday 15 March 2026."
      />

      {/* champion feature */}
      <div className="reveal mb-20 grid items-center gap-10 border-y py-12 md:grid-cols-12" style={{ borderColor: "var(--hairline)" }}>
        <div className="flex items-center gap-8 md:col-span-6">
          <div className="cine-frame is-visible h-32 w-32 shrink-0 overflow-hidden rounded-full md:h-40 md:w-40" style={{ border: "3px solid var(--gold)" }}>
            <img src={champion.photo} alt={champion.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Champion</p>
            <p className="font-display mt-3 text-4xl font-light leading-[1.02] md:text-5xl">{champion.name}</p>
            <p className="mt-3 flex items-center gap-2 text-sm uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
              <Flag code={champion.flag} cc={champion.countryCode} />
              {champion.country} · Winner's cheque {champion.earnings}
            </p>
            <img src="/images/trophy.png" alt="Trophy" className="mt-4 h-10 w-auto" />
          </div>
        </div>
        <div className="flex gap-14 md:col-span-6 md:justify-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
              Score
            </p>
            <p className="font-display tabular mt-2 text-6xl font-light md:text-7xl" style={{ color: "var(--forest)" }}>
              {champion.score}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
              Rounds
            </p>
            <p className="font-display mt-2 text-2xl italic md:text-3xl" style={{ color: "var(--ink)" }}>
              {champion.rounds.join(" · ")}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
              Total
            </p>
            <p className="font-display tabular mt-2 text-2xl italic md:text-3xl" style={{ color: "var(--ink)" }}>
              {champion.total}
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="hairline-b text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
              <th className="py-4 pr-4 font-semibold">Pos</th>
              <th className="py-4 pr-4 font-semibold">Player</th>
              <th className="py-4 pr-4 font-semibold">Round by Round</th>
              <th className="py-4 pr-4 text-right font-semibold">Total</th>
              <th className="py-4 pr-4 text-right font-semibold">To Par</th>
              <th className="py-4 text-right font-semibold">Earnings</th>
            </tr>
          </thead>
          <tbody className="lb-body">
            {rest.map((r, i) => (
              <tr key={r.player} className="lb-row row-in hairline-b" style={{ "--i": i } as React.CSSProperties}>
                <td className="py-4 pr-4">
                  <span className="font-display text-lg">{r.pos}</span>
                </td>
                <td className="py-4 pr-4">
                  <span className="text-[15px] font-semibold">{r.player}</span>
                  <span className="ml-2 inline-flex items-center gap-1.5 text-xs" style={{ color: "var(--ink-faint)" }}>
                    <Flag code={r.flag} cc={r.countryCode} className="h-2.5 w-auto" />
                    {r.countryCode}
                  </span>
                </td>
                <td className="tabular py-4 pr-4 text-sm" style={{ color: "var(--ink-soft)" }}>
                  {r.rounds}
                </td>
                <td className="tabular py-4 pr-4 text-right text-sm font-semibold">{r.total}</td>
                <td className="tabular py-4 pr-4 text-right text-sm font-semibold" style={{ color: "var(--forest)" }}>
                  {r.toPar}
                </td>
                <td className="tabular py-4 text-right text-sm" style={{ color: "var(--gold)" }}>
                  {r.earnings}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="reveal mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
        Full payout published in the Prize Money section · {tournament.purse} purse · earnings shown in Indian Rupees
      </p>
    </section>
  );
}
