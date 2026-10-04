import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { field, countryStats, tournament } from "@/data/tournament";
import { Flag } from "@/components/Flag";
import { useReveal } from "@/hooks/useGolf";

export function Field() {
  const ref = useReveal<HTMLElement>();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(field.map((f) => f.category)))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return field.filter(
      (f) =>
        (category === "All" || f.category === category) &&
        (!q || f.name.toLowerCase().includes(q) || f.country.toLowerCase().includes(q))
    );
  }, [query, category]);

  return (
    <section id="field" ref={ref} className="scroll-mt-24 py-24 md:py-36" style={{ background: "var(--forest-deep)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 md:mb-20">
          <div className="reveal flex items-baseline gap-4">
            <span className="font-display text-sm italic" style={{ color: "var(--gold-soft)" }}>
              05
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--gold-soft)" }}>
              The Players
            </span>
          </div>
          <h2 className="reveal font-display mt-5 text-4xl font-light leading-[1.05] tracking-tight text-white md:text-6xl" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            A field of {tournament.entries} entries,
            <br />
            {tournament.fieldSize} teed it up
          </h2>
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-white/60" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
            Order of Merit champions, multiple tour winners, a strong international contingent and Qualifying School graduates — the full entry list as published by the DP World PGTI.
          </p>
        </div>

        {/* country strip */}
        <div className="reveal mb-12 flex flex-wrap items-center gap-x-7 gap-y-3" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
          {countryStats.map((c) => (
            <span key={c.country} className="inline-flex items-center gap-2 text-xs text-white/55">
              <Flag code={c.flag} cc={c.country} />
              {c.country}
              <span className="tabular" style={{ color: "var(--gold-soft)" }}>
                {c.count}
              </span>
            </span>
          ))}
        </div>

        {/* search + category filters */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <label className="reveal flex w-full max-w-sm items-center gap-3 border border-white/20 px-4 py-2.5" style={{ background: "rgba(250,248,241,0.05)" }}>
            <Search size={15} style={{ color: "rgba(250,248,241,0.45)" }} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search player or country…"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
            />
          </label>
          <div className="reveal flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className="px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors"
                style={{
                  background: category === c ? "var(--gold)" : "rgba(250,248,241,0.07)",
                  color: category === c ? "var(--ink)" : "rgba(250,248,241,0.65)",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* entry table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.22em] text-white/40" style={{ borderBottom: "1px solid rgba(250,248,241,0.15)" }}>
                <th className="py-4 pr-4 font-semibold">Sr</th>
                <th className="py-4 pr-4 font-semibold">Country</th>
                <th className="py-4 pr-4 font-semibold">Player Name</th>
                <th className="py-4 text-right font-semibold">Category</th>
              </tr>
            </thead>
            <tbody key={`${category}-${query}`}>
              {filtered.map((p, i) => (
                <tr
                  key={`${p.seed}-${p.name}`}
                  className="row-in transition-colors hover:bg-white/[0.05]"
                  style={{ "--i": Math.min(i, 40), borderBottom: "1px solid rgba(250,248,241,0.08)" } as React.CSSProperties}
                >
                  <td className="tabular py-3 pr-4 text-sm text-white/45">{p.seed}</td>
                  <td className="py-3 pr-4">
                    <Flag code={p.flag} cc={p.countryCode} className="h-3 w-auto" />
                  </td>
                  <td className="py-3 pr-4 text-[15px] font-medium text-white">{p.name}</td>
                  <td className="py-3 text-right text-[11px] uppercase tracking-[0.14em] text-white/40">{p.category}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-10 text-center text-sm text-white/40">
                    No players match “{query}”.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="reveal mt-10 text-center text-xs uppercase tracking-[0.25em] text-white/40">
          Showing {filtered.length} of {field.length} entries · {tournament.fieldSize} started · {tournament.madeCut} made the cut
        </p>
      </div>
    </section>
  );
}
