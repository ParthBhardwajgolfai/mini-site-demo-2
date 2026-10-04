import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { field, countryStats, tournament } from "@/data/tournament";
import { Flag } from "@/components/Flag";
import { useReveal } from "@/hooks/useGolf";

const PAGE_SIZE = 25;

interface FieldProps {
  /** Hide the section heading when the page header already carries it. */
  showHeading?: boolean;
}

export function Field({ showHeading = true }: FieldProps) {
  const ref = useReveal<HTMLElement>();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

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

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageRows = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const rangeStart = (safePage - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(safePage * PAGE_SIZE, filtered.length);

  /** Page numbers with ellipses — first/last always visible, five around the current page. */
  const pageWindow = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    let start = Math.max(1, safePage - 2);
    const end = Math.min(totalPages, start + 4);
    start = Math.max(1, end - 4);
    const out: (number | "…")[] = [1];
    if (start > 2) out.push("…");
    for (let p = Math.max(start, 2); p <= Math.min(end, totalPages - 1); p++) out.push(p);
    if (end < totalPages - 1) out.push("…");
    out.push(totalPages);
    return out;
  }, [totalPages, safePage]);

  const go = (p: number) => {
    setPage(Math.min(Math.max(1, p), totalPages));
    document.getElementById("field")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="field" ref={ref} className="scroll-mt-24 py-24 md:py-36" style={{ background: "var(--ivory-deep)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {showHeading && (
          <div className="mb-14 md:mb-20">
            <div className="reveal flex items-baseline gap-4">
              <span className="font-display text-sm italic" style={{ color: "var(--gold)" }}>
                05
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
                The Players
              </span>
            </div>
            <h2 className="reveal font-display mt-5 text-4xl font-light leading-[1.05] tracking-tight md:text-6xl" style={{ "--reveal-delay": "80ms", color: "var(--ink)" } as React.CSSProperties}>
              A field of {tournament.entries} entries,
              <br />
              {tournament.fieldSize} teed it up
            </h2>
            <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed" style={{ "--reveal-delay": "160ms", color: "var(--ink-soft)" } as React.CSSProperties}>
              Order of Merit champions, multiple tour winners, a strong international contingent and Qualifying School graduates — the full entry list as published by the DP World PGTI.
            </p>
          </div>
        )}

        {/* country strip */}
        <div className="reveal mb-12 flex flex-wrap items-center gap-x-7 gap-y-3" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
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

        {/* search + category filters */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <label className="reveal flex w-full max-w-sm items-center gap-3 border px-4 py-2.5" style={{ borderColor: "var(--hairline)", background: "rgba(255,255,255,0.6)" }}>
            <Search size={15} style={{ color: "var(--ink-faint)" }} />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search player or country…"
              className="w-full bg-transparent text-sm outline-none"
              style={{ color: "var(--ink)" }}
            />
          </label>
          <div className="reveal flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className="px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors"
                style={{
                  background: category === c ? "var(--gold)" : "rgba(23,26,21,0.05)",
                  color: category === c ? "var(--ink)" : "var(--ink-soft)",
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
              <tr className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)", borderBottom: "1px solid var(--hairline)" }}>
                <th className="py-4 pr-4 font-semibold">Sr</th>
                <th className="py-4 pr-4 font-semibold">Country</th>
                <th className="py-4 pr-4 font-semibold">Player Name</th>
                <th className="py-4 text-right font-semibold">Category</th>
              </tr>
            </thead>
            <tbody key={`${category}-${query}-${safePage}`}>
              {pageRows.map((p, i) => (
                <tr
                  key={`${p.seed}-${p.name}`}
                  className="row-in transition-colors hover:bg-[rgba(29,69,49,0.045)]"
                  style={{ "--i": Math.min(i, 40), borderBottom: "1px solid var(--hairline)" } as React.CSSProperties}
                >
                  <td className="tabular py-3 pr-4 text-sm" style={{ color: "var(--ink-faint)" }}>{p.seed}</td>
                  <td className="py-3 pr-4">
                    <Flag code={p.flag} cc={p.countryCode} className="h-3 w-auto" />
                  </td>
                  <td className="py-3 pr-4 text-[15px] font-medium" style={{ color: "var(--ink)" }}>{p.name}</td>
                  <td className="py-3 text-right text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--ink-faint)" }}>{p.category}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-10 text-center text-sm" style={{ color: "var(--ink-faint)" }}>
                    No players match “{query}”.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* pagination */}
        {filtered.length > PAGE_SIZE && (
          <nav className="reveal mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Field pages">
            <button
              onClick={() => go(safePage - 1)}
              disabled={safePage === 1}
              className="flex h-9 w-9 items-center justify-center transition-colors disabled:opacity-30"
              style={{ border: "1px solid var(--hairline)", color: "var(--ink-soft)", background: "rgba(255,255,255,0.5)" }}
              aria-label="Previous page"
            >
              <ChevronLeft size={15} />
            </button>
            {pageWindow.map((p, i) =>
              p === "…" ? (
                <span key={`gap-${i}`} className="px-1 text-sm" style={{ color: "var(--ink-faint)" }}>
                  …
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => go(p)}
                  className="tabular flex h-9 min-w-9 items-center justify-center px-2 text-[13px] font-semibold transition-colors"
                  style={{
                    background: safePage === p ? "var(--gold)" : "rgba(255,255,255,0.5)",
                    color: safePage === p ? "var(--ink)" : "var(--ink-soft)",
                    border: "1px solid var(--hairline)",
                  }}
                  aria-current={safePage === p ? "page" : undefined}
                >
                  {p}
                </button>
              )
            )}
            <button
              onClick={() => go(safePage + 1)}
              disabled={safePage === totalPages}
              className="flex h-9 w-9 items-center justify-center transition-colors disabled:opacity-30"
              style={{ border: "1px solid var(--hairline)", color: "var(--ink-soft)", background: "rgba(255,255,255,0.5)" }}
              aria-label="Next page"
            >
              <ChevronRight size={15} />
            </button>
          </nav>
        )}

        <p className="reveal mt-8 text-center text-xs uppercase tracking-[0.25em]" style={{ color: "var(--ink-faint)" }}>
          {filtered.length > 0
            ? `Showing ${rangeStart}–${rangeEnd} of ${filtered.length} entries`
            : "No entries"}{" "}
          · {tournament.fieldSize} started · {tournament.madeCut} made the cut
        </p>
      </div>
    </section>
  );
}
