import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { prizes, tournament } from "@/data/tournament";
import { CountUp } from "@/components/CountUp";
import { useReveal } from "@/hooks/useGolf";

interface PrizeMoneyProps {
  /** Section number within the page. */
  index?: string;
}

export function PrizeMoney({ index = "07" }: PrizeMoneyProps) {
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<string | null>(null);

  const [first, second, third, ...rest] = prizes;
  const podium = [
    { entry: first, label: "Champion", big: true },
    { entry: second, label: "Runner-up", big: false },
    { entry: third, label: third && third.players.length > 1 ? `Tied ${third.pos}${third.pos === "—" ? "" : "rd"}` : "Third", big: false },
  ];

  return (
    <section id="prize-money" ref={ref} className="scroll-mt-24 py-24 md:py-36" style={{ background: "var(--ivory-deep)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 text-center md:mb-24">
          <div className="reveal flex items-baseline justify-center gap-4">
            <span className="font-display text-sm italic" style={{ color: "var(--gold)" }}>
              {index}
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
              The Purse
            </span>
          </div>
          <h2 className="reveal font-display mt-6 text-6xl font-light leading-none tracking-tight md:text-[7rem]" style={{ "--reveal-delay": "80ms", color: "var(--forest)" } as React.CSSProperties}>
            <CountUp value={300000} prefix="$" />
          </h2>
          <p className="reveal mt-4 text-sm uppercase tracking-[0.2em]" style={{ "--reveal-delay": "160ms", color: "var(--ink-faint)" } as React.CSSProperties}>
            {tournament.purseNote}
          </p>
        </div>

        {/* podium cards */}
        <div className="mb-20 grid gap-px md:grid-cols-3" style={{ background: "var(--hairline)" }}>
          {podium.map(({ entry, label, big }, i) =>
            entry ? (
              <div
                key={entry.pos + label}
                className="reveal p-10 md:p-12"
                style={{ background: big ? "var(--ivory)" : "rgba(255,255,255,0.45)", "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
              >
                <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                  {label}
                </p>
                <p className={`font-display tabular mt-6 font-light ${big ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"}`} style={{ color: "var(--forest)" }}>
                  <CountUp value={entry.amountValue} prefix="₹" locale="en-IN" />
                </p>
                <div className="mt-6 space-y-1">
                  {entry.players.map((p) => (
                    <p key={p} className={`font-display italic ${big ? "text-2xl" : "text-lg"}`} style={{ color: "var(--ink)" }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* detailed payout rows */}
        <div className="reveal">
          <p className="mb-6 text-[11px] uppercase tracking-[0.25em]" style={{ color: "var(--ink-faint)" }}>Official payout · as published by the tour · all amounts in ₹</p>
          {rest.map((p, i) => {
            const isOpen = open === p.pos;
            return (
              <div key={p.pos + i} style={{ borderTop: i === 0 ? "1px solid var(--hairline)" : "none" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : p.pos)}
                  className="flex w-full items-center gap-6 py-5 text-left transition-colors hover:bg-[rgba(29,69,49,0.04)]"
                  style={{ borderBottom: "1px solid var(--hairline)" }}
                >
                  <span className="font-display w-14 shrink-0 text-lg italic" style={{ color: "var(--ink-soft)" }}>{p.pos}</span>
                  <span className="flex-1 truncate text-[15px] font-medium" style={{ color: "var(--ink)" }}>{p.players.join("  ·  ")}</span>
                  <span className="font-display tabular shrink-0 text-xl font-light" style={{ color: "var(--gold)" }}>
                    {p.amount}
                  </span>
                  <ChevronDown size={15} className="shrink-0 transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "none", color: "var(--ink-faint)" }} />
                </button>
                <div className={`expandable-body ${isOpen ? "open" : ""}`}>
                  <div>
                    <div className="flex flex-wrap gap-x-16 gap-y-4 py-6 pl-14 md:pl-20">
                      {p.players.map((name) => (
                        <div key={name}>
                          <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>Player</p>
                          <p className="font-display mt-1 text-lg italic" style={{ color: "var(--ink)" }}>{name}</p>
                          <p className="tabular mt-1 text-sm" style={{ color: "var(--gold)" }}>
                            {p.amount} each
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="reveal mt-10 text-center text-xs uppercase tracking-[0.25em]" style={{ color: "var(--ink-faint)" }}>
          Prize fund distributed across the leading professionals and ties · {prizes.reduce((a, p) => a + p.players.length, 0)} players earned prize money
        </p>
      </div>
    </section>
  );
}
