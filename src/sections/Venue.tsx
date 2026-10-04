import { venue } from "@/data/tournament";
import { useReveal } from "@/hooks/useGolf";

export function Venue() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="venue" ref={ref} className="scroll-mt-24 pb-24 pt-0 md:pb-36" style={{ background: "var(--ivory-deep)" }}>
      {/* immersive image — the complete photograph at its exact aspect, never cropped or zoomed.
          The title overlays it from sm upward; on phones it flows below so nothing is cramped. */}
      <div className="relative">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src="/images/venue-aerial.jpg"
            alt="On course at Kalhaar Blues & Greens during the opening round"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(242,238,226,1) 0%, rgba(242,238,226,0.55) 14%, rgba(242,238,226,0) 34%)" }}
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-6 sm:absolute sm:inset-x-0 sm:bottom-8 sm:px-10 sm:pt-0">
          <p className="eyebrow">The Venue</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl font-light leading-[1.02] tracking-tight sm:text-5xl md:text-7xl" style={{ color: "var(--ink)" }}>
            {venue.name}
          </h2>
          <p className="font-display mt-3 text-xl italic" style={{ color: "var(--gold)" }}>
            {venue.location}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {venue.description.map((p, i) => (
              <p
                key={i}
                className={`reveal leading-relaxed ${i === 0 ? "font-display text-2xl md:text-3xl md:leading-snug" : "mt-8 text-lg"}`}
                style={{ color: i === 0 ? "var(--ink)" : "var(--ink-soft)", "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                {p}
              </p>
            ))}
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <dl className="reveal grid grid-cols-2 gap-y-0 lg:grid-cols-1">
              {venue.stats.map((s) => (
                <div key={s.label} className="hairline-b flex items-baseline justify-between gap-4 py-3.5">
                  <dt className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                    {s.label}
                  </dt>
                  <dd className="font-display text-lg italic" style={{ color: "var(--forest)" }}>
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
