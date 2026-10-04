import { Fragment, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { leaderboard, roundStandings, scorecards, courseCard, tournament, type RoundKey, type LeaderboardRow, type RoundStandingRow } from "@/data/tournament";
import { SectionHeading } from "@/components/SectionHeading";
import { Flag } from "@/components/Flag";
import { useReveal } from "@/hooks/useGolf";

const roundTabs = [
  { key: "final", label: "Final" },
  { key: "Round 1", label: "Round 1" },
  { key: "Round 2", label: "Round 2" },
  { key: "Round 3", label: "Round 3" },
  { key: "Round 4", label: "Round 4" },
] as const;

type TabKey = (typeof roundTabs)[number]["key"];

const toParColor = (s: string) => (s.startsWith("-") ? "var(--forest)" : s === "E" ? "var(--ink-soft)" : "#9a3c2e");

/** 18-hole strip for one player in one round; red = birdie or better, blue = bogey or worse. */
function HoleStrip({ player, round }: { player: string; round: RoundKey }) {
  const card = scorecards[round]?.find((c) => c.player === player);
  if (!card) return null;
  return (
    <div className="flex flex-wrap gap-1.5 py-5 pl-2 md:pl-14">
      {card.holes.map((score, hi) => {
        const par = courseCard.par[hi];
        const diff = score - par;
        const style: React.CSSProperties =
          diff < 0
            ? { background: "#9a3c2e", color: "#fff", borderRadius: "9999px" }
            : diff > 0
              ? { border: "1.5px solid #33628c", color: "#33628c", borderRadius: "3px" }
              : { border: "1px solid var(--hairline)", color: "var(--ink-soft)" };
        return (
          <div key={hi} className="w-[38px] text-center">
            <div className="mx-auto flex h-8 w-8 items-center justify-center text-[13px] font-semibold tabular" style={style}>
              {score}
            </div>
            <p className="mt-1 text-[9px] uppercase tracking-wider" style={{ color: "var(--ink-faint)" }}>
              {hi + 1}
            </p>
          </div>
        );
      })}
      <div className="ml-3 self-center text-sm">
        <span className="tabular font-semibold">{card.out}</span>
        <span className="mx-2" style={{ color: "var(--ink-faint)" }}>
          /
        </span>
        <span className="tabular font-semibold">{card.in}</span>
        <span className="ml-2 text-xs" style={{ color: "var(--ink-faint)" }}>
          = {card.roundTotal}
        </span>
      </div>
    </div>
  );
}

export function Leaderboard() {
  const ref = useReveal<HTMLElement>();
  const [tab, setTab] = useState<TabKey>("final");
  const [expanded, setExpanded] = useState<string | null>(null);

  const rows: (LeaderboardRow | RoundStandingRow)[] = useMemo(() => {
    if (tab === "final") return leaderboard;
    return roundStandings[tab as RoundKey];
  }, [tab]);

  return (
    <section id="leaderboard" ref={ref} className="scroll-mt-24 py-24 md:py-36" style={{ background: "var(--ivory-deep)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading index="03" eyebrow="Scoring" title="Leaderboard" lede={`${tournament.statusDetail} · Par ${tournament.par} · ${tournament.venue} · ${tournament.yardage.toLocaleString("en-IN")} yards`} />
          <div className="reveal mb-14 flex flex-wrap gap-0 md:mb-20" style={{ border: "1px solid var(--hairline)" }}>
            {roundTabs.map((t) => (
              <button
                key={t.key}
                onClick={() => {
                  setTab(t.key);
                  setExpanded(null);
                }}
                className="px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors"
                style={{
                  background: tab === t.key ? "var(--forest)" : "transparent",
                  color: tab === t.key ? "var(--ivory)" : "var(--ink-soft)",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left">
            <thead>
              <tr className="hairline-b text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                <th className="py-4 pr-4 font-semibold">Pos</th>
                <th className="py-4 pr-4 font-semibold">Player</th>
                <th className="hidden py-4 pr-4 font-semibold md:table-cell">Country</th>
                <th className="py-4 pr-4 text-right font-semibold">{tab === "final" ? "R1" : "Today"}</th>
                {tab === "final" && (
                  <>
                    <th className="py-4 pr-4 text-right font-semibold">R2</th>
                    <th className="py-4 pr-4 text-right font-semibold">R3</th>
                    <th className="py-4 pr-4 text-right font-semibold">R4</th>
                  </>
                )}
                <th className="py-4 pr-4 text-right font-semibold">{tab === "final" ? "Total" : "Cum."}</th>
                <th className="py-4 pr-4 text-right font-semibold">To Par</th>
                <th className="py-4 pr-2 text-right font-semibold">Thru</th>
                <th className="w-8" />
              </tr>
            </thead>
            <tbody className="lb-body" key={tab}>
              {rows.map((r, i) => {
                const key = `${r.player}-${r.pos}`;
                const open = expanded === key;
                const isFinal = tab === "final";
                const f = r as LeaderboardRow;
                const rd = r as RoundStandingRow;
                const isLeader = r.pos === "1";
                return (
                  <Fragment key={key}>
                    <tr
                      className="lb-row row-in hairline-b cursor-pointer"
                      style={{ "--i": i } as React.CSSProperties}
                      onClick={() => setExpanded(open ? null : key)}
                    >
                      <td className="py-4 pr-4">
                        <span
                          className="font-display text-lg"
                          style={{ color: isLeader ? "var(--gold)" : "var(--ink)", fontStyle: isLeader ? "italic" : "normal" }}
                        >
                          {r.pos}
                        </span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-[15px] font-semibold" style={{ color: "var(--ink)" }}>
                          {r.player}
                        </span>
                        {isLeader && isFinal && (
                          <span className="ml-2 text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                            Champion
                          </span>
                        )}
                      </td>
                      <td className="hidden py-4 pr-4 md:table-cell">
                        <span className="inline-flex items-center gap-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                          <Flag code={r.flag} cc={r.countryCode} />
                          {r.countryCode}
                        </span>
                      </td>
                      <td className="tabular py-4 pr-4 text-right text-sm">{isFinal ? f.r1 : rd.roundScore}</td>
                      {isFinal && (
                        <>
                          <td className="tabular py-4 pr-4 text-right text-sm">{f.r2 ?? "—"}</td>
                          <td className="tabular py-4 pr-4 text-right text-sm">{f.r3 ?? "—"}</td>
                          <td className="tabular py-4 pr-4 text-right text-sm">{f.r4 ?? "—"}</td>
                        </>
                      )}
                      <td className="tabular py-4 pr-4 text-right text-sm font-semibold">{isFinal ? f.total : rd.cumTotal}</td>
                      <td className="tabular py-4 pr-4 text-right text-sm font-semibold" style={{ color: toParColor(r.toPar) }}>
                        {r.toPar}
                      </td>
                      <td className="py-4 pr-2 text-right text-xs uppercase tracking-wider" style={{ color: "var(--ink-faint)" }}>
                        {isFinal ? "F" : rd.thru}
                      </td>
                      <td className="py-4">
                        <ChevronDown size={14} className="transition-transform duration-300" style={{ transform: open ? "rotate(180deg)" : "none", color: "var(--ink-faint)" }} />
                      </td>
                    </tr>
                    <tr className="hairline-b">
                      <td colSpan={11} className="p-0">
                        <div className={`expandable-body ${open ? "open" : ""}`}>
                          <div>
                            {isFinal && (
                              <div className="flex flex-wrap gap-x-12 gap-y-4 py-5 pl-2 md:pl-14">
                                {[f.r1, f.r2, f.r3, f.r4].map((s, ri) => (
                                  <div key={ri}>
                                    <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                                      Round {ri + 1}
                                    </p>
                                    <p className="tabular mt-1 text-sm font-medium">
                                      {s ?? "—"}
                                      {s && (
                                        <span className="ml-2 text-xs" style={{ color: s - tournament.par < 0 ? "var(--forest)" : "var(--ink-faint)" }}>
                                          ({s - tournament.par === 0 ? "E" : s - tournament.par > 0 ? `+${s - tournament.par}` : s - tournament.par})
                                        </span>
                                      )}
                                    </p>
                                  </div>
                                ))}
                                <div>
                                  <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                                    Nation
                                  </p>
                                  <p className="mt-1 text-sm font-medium">{r.country}</p>
                                </div>
                              </div>
                            )}
                            {isFinal && <p className="pl-2 text-[10px] uppercase tracking-[0.25em] md:pl-14" style={{ color: "var(--gold)" }}>Final-round scorecard</p>}
                            {!isFinal && (
                              <p className="pl-2 pt-5 text-[10px] uppercase tracking-[0.25em] md:pl-14" style={{ color: "var(--gold)" }}>
                                {tab} scorecard
                              </p>
                            )}
                            <HoleStrip player={r.player} round={(isFinal ? "Round 4" : tab) as RoundKey} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="reveal mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
          {tab === "final"
            ? `${leaderboard.length} made the cut · ${tournament.fieldSize - leaderboard.length} missed · tap a row for the final-round scorecard`
            : `Standing through ${tab} · ${rows.length} players · tap a row for that round's scorecard`}
        </p>
      </div>
    </section>
  );
}
