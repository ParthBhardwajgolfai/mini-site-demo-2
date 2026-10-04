import { courseCard, tournament } from "@/data/tournament";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useGolf";

const holes = Array.from({ length: 18 }, (_, i) => i + 1);

export function Course() {
  const ref = useReveal<HTMLElement>();

  const cell = (v: number, i: number) => (
    <td key={i} className="tabular py-3 pr-4 text-right text-sm">
      {v}
    </td>
  );

  return (
    <section id="course" ref={ref} className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-24 md:px-10 md:py-36">
      <SectionHeading
        index="02"
        eyebrow="Course Info"
        title={tournament.venue}
        lede={`The official championship card — par ${courseCard.totalPar}, ${courseCard.totalYards.toLocaleString("en-IN")} yards. The 619-yard 15th is the longest examination; the 174-yard 7th the shortest and sharpest. Water is never far from the greens at Ahmedabad's championship layout.`}
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className="hairline-b text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
              <th className="py-4 pr-4 font-semibold">Hole</th>
              {holes.map((h) => (
                <th key={h} className="tabular py-4 pr-4 text-right font-semibold">
                  {h}
                </th>
              ))}
              <th className="py-4 pr-4 text-right font-semibold" style={{ color: "var(--gold)" }}>
                OUT
              </th>
              <th className="py-4 pr-4 text-right font-semibold" style={{ color: "var(--gold)" }}>
                IN
              </th>
              <th className="py-4 text-right font-semibold" style={{ color: "var(--gold)" }}>
                Total
              </th>
            </tr>
          </thead>
          <tbody className="lb-body">
            <tr className="row-in hairline-b" style={{ "--i": 0 } as React.CSSProperties}>
              <td className="py-3 pr-4 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
                Par
              </td>
              {courseCard.par.map(cell)}
              <td className="tabular py-3 pr-4 text-right text-sm font-semibold">{courseCard.frontPar}</td>
              <td className="tabular py-3 pr-4 text-right text-sm font-semibold">{courseCard.backPar}</td>
              <td className="tabular py-3 text-right text-sm font-semibold">{courseCard.totalPar}</td>
            </tr>
            <tr className="row-in hairline-b" style={{ "--i": 1 } as React.CSSProperties}>
              <td className="py-3 pr-4 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
                Yards
              </td>
              {courseCard.yards.map(cell)}
              <td className="tabular py-3 pr-4 text-right text-sm font-semibold">
                {courseCard.yards.slice(0, 9).reduce((a, b) => a + b, 0).toLocaleString("en-IN")}
              </td>
              <td className="tabular py-3 pr-4 text-right text-sm font-semibold">
                {courseCard.yards.slice(9).reduce((a, b) => a + b, 0).toLocaleString("en-IN")}
              </td>
              <td className="tabular py-3 text-right text-sm font-semibold">{courseCard.totalYards.toLocaleString("en-IN")}</td>
            </tr>
            <tr className="row-in hairline-b" style={{ "--i": 2 } as React.CSSProperties}>
              <td className="py-3 pr-4 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
                Stroke Index
              </td>
              {courseCard.si.map(cell)}
              <td className="py-3 pr-4" />
              <td className="py-3 pr-4" />
              <td className="py-3" />
            </tr>
          </tbody>
        </table>
      </div>

      <p className="reveal mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
        Stroke Index 1 · Hole {courseCard.si.indexOf(1) + 1} · Stroke Index 18 · Hole {courseCard.si.indexOf(18) + 1}
      </p>
    </section>
  );
}
