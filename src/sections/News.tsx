import { news } from "@/data/tournament";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useGolf";

export function News() {
  const ref = useReveal<HTMLElement>();
  const [featured, ...rest] = news;

  return (
    <section id="news" ref={ref} className="scroll-mt-24 py-24 md:py-36" style={{ background: "var(--ivory-deep)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          index="09"
          eyebrow="Tournament News"
          title="Stories from the week"
          lede="Reports from the DP World PGTI media team across all four days of the championship in Ahmedabad."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          {/* featured story */}
          <article className="reveal group lg:col-span-7" style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
            <div className="cine-frame aspect-[16/10] overflow-hidden">
              <img src={featured.image} alt={featured.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
            </div>
            <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
              <span className="px-2.5 py-1 font-semibold" style={{ background: "var(--forest)", color: "var(--ivory)" }}>
                Final Day
              </span>
              <span>{featured.date}</span>
              <span>· {featured.location}</span>
            </div>
            <h3 className="font-display mt-4 max-w-2xl text-2xl font-light leading-snug md:text-3xl" style={{ color: "var(--ink)" }}>
              {featured.title}
            </h3>
          </article>

          {/* rest of the stories */}
          <div className="lg:col-span-5">
            {rest.map((n, i) => (
              <article key={n.title} className="reveal hairline-b group flex gap-6 py-7 first:pt-0" style={{ "--reveal-delay": `${(i + 1) * 90}ms` } as React.CSSProperties}>
                <div className="cine-frame h-24 w-32 shrink-0 overflow-hidden md:h-28 md:w-40">
                  <img src={n.image} alt={n.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                    {n.date} · {n.location}
                  </p>
                  <h3 className="mt-2 line-clamp-3 text-[15px] font-medium leading-snug transition-colors" style={{ color: "var(--ink)" }}>
                    {n.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
