import { leaderboard, champion, tournament } from "@/data/tournament";
import { Flag } from "@/components/Flag";
import { PreviewHeading } from "@/components/PreviewHeading";
import { ViewAll } from "@/components/ViewAll";
import { useReveal } from "@/hooks/useGolf";

const PREVIEW_ROWS = 8;

/** Homepage leaderboard preview — the champion and the top of the final
 *  standings only; the complete round-by-round board lives on /leaderboard. */
export function LeaderboardPreview() {
  const ref = useReveal<HTMLElement>();
  const rows = leaderboard.slice(0, PREVIEW_ROWS);

  return (
    <section ref={ref} className="scroll-mt-24 py-24 md:py-36" style={{ background: "var(--ivory-deep)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <PreviewHeading
          eyebrow="Scoring"
          title="The leaderboard"
          lede={`${tournament.statusDetail} · ${leaderboard.length} made the cut · par ${tournament.par}`}
          ctaTo="/leaderboard"
          ctaLabel="View Full Leaderboard"
        />

        {/* champion strip */}
        <div
          className="reveal mb-10 flex flex-wrap items-center gap-6 border px-6 py-5"
          style={{ borderColor: "var(--gold)", background: "rgba(185,154,85,0.08)" }}
        >
          <div className="cine-frame is-visible h-14 w-14 shrink-0 overflow-hidden rounded-full" style={{ border: "2px solid var(--gold)" }}>
            <img src={champion.photo} alt={champion.name} className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
              Champion · {champion.score}
            </p>
            <p className="font-display flex items-center gap-2 text-xl italic" style={{ color: "var(--ink)" }}>
              {champion.name}
              <Flag code={champion.flag} cc={champion.countryCode} />
            </p>
          </div>
          <p className="ml-auto hidden text-[11px] uppercase tracking-[0.2em] sm:block" style={{ color: "var(--ink-faint)" }}>
            Winner's cheque {champion.earnings}
          </p>
        </div>

        {/* top of the final standings */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="hairline-b text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                <th className="py-4 pr-4 font-semibold">Pos</th>
                <th className="py-4 pr-4 font-semibold">Player</th>
                <th className="py-4 pr-4 text-right font-semibold">Total</th>
                <th className="py-4 text-right font-semibold">To Par</th>
              </tr>
            </thead>
            <tbody className="lb-body" key="preview">
              {rows.map((r, i) => {
                const isLeader = r.pos === "1";
                return (
                  <tr key={`${r.player}-${r.pos}`} className="lb-row row-in hairline-b" style={{ "--i": i } as React.CSSProperties}>
                    <td className="py-3.5 pr-4">
                      <span
                        className="font-display text-lg"
                        style={{ color: isLeader ? "var(--gold)" : "var(--ink)", fontStyle: isLeader ? "italic" : "normal" }}
                      >
                        {r.pos}
                      </span>
                    </td>
                    <td className="py-3.5 pr-4">
                      <span className="text-[15px] font-semibold" style={{ color: "var(--ink)" }}>
                        {r.player}
                      </span>
                      <span className="ml-3 inline-flex items-center gap-1.5 text-xs" style={{ color: "var(--ink-faint)" }}>
                        <Flag code={r.flag} cc={r.countryCode} className="h-2.5 w-auto" />
                        {r.countryCode}
                      </span>
                      {isLeader && (
                        <span className="ml-2 text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                          Champion
                        </span>
                      )}
                    </td>
                    <td className="tabular py-3.5 pr-4 text-right text-sm font-semibold">{r.total}</td>
                    <td className="tabular py-3.5 text-right text-sm font-semibold" style={{ color: r.toPar.startsWith("-") ? "var(--forest)" : "var(--ink-soft)" }}>
                      {r.toPar}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="reveal mt-10 flex justify-center">
          <ViewAll to="/leaderboard">View Full Leaderboard</ViewAll>
        </div>
      </div>
    </section>
  );
}
