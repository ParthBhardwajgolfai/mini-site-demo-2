import { useState } from "react";
import { gallery } from "@/data/tournament";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useGolf";

const filters = ["All", "Press Conference", "Round 1", "Round 2", "Round 3"];

interface GalleryProps {
  /** Hide the section heading when the page header already carries it. */
  showHeading?: boolean;
}

export function Gallery({ showHeading = true }: GalleryProps) {
  const ref = useReveal<HTMLElement>();
  const [filter, setFilter] = useState("All");
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category.includes(filter));

  return (
    <section id="gallery" ref={ref} className="mx-auto max-w-[1400px] scroll-mt-24 px-6 py-24 md:px-10 md:py-36">
      {showHeading ? (
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading index="08" eyebrow="Media" title="The week in frames" lede="Press conference, practice and tournament action — the Indorama Ventures Open 2026 as it unfolded in Ahmedabad." />
          <div className="reveal mb-14 flex flex-wrap gap-6 md:mb-20">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all"
                style={{
                  color: filter === f ? "var(--forest)" : "var(--ink-faint)",
                  borderBottom: filter === f ? "1px solid var(--gold)" : "1px solid transparent",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-12 flex flex-wrap gap-6 md:mb-16">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="pb-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all"
              style={{
                color: filter === f ? "var(--forest)" : "var(--ink-faint)",
                borderBottom: filter === f ? "1px solid var(--gold)" : "1px solid transparent",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <div className="masonry md:columns-2 lg:columns-3" key={filter}>
        {items.map((g, i) => (
          <figure key={g.src + g.alt} className="row-in group" style={{ "--i": i } as React.CSSProperties}>
            <div className="cine-frame is-visible overflow-hidden">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4">
              <span className="font-display text-sm italic" style={{ color: "var(--ink)" }}>
                {g.alt}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--ink-faint)" }}>
                {g.category[0]}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
