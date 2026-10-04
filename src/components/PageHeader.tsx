import { useReveal } from "@/hooks/useGolf";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lede?: string;
  /** Small meta row under the lede — e.g. dates / venue / purse. */
  meta?: string[];
}

/** Shared opening band for every inner page — light, editorial, refined.
 *  Warm ivory with a whisper of gold; keeps the fixed header readable. */
export function PageHeader({ eyebrow, title, lede, meta }: PageHeaderProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "var(--ivory)" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 90% at 8% 0%, rgba(185,154,85,0.10) 0%, rgba(185,154,85,0) 58%)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-32 md:px-10 md:pb-16 md:pt-40">
        <p className="reveal eyebrow">{eyebrow}</p>
        <h1
          className="reveal font-display mt-5 max-w-4xl text-4xl font-light leading-[1.04] tracking-tight md:text-6xl"
          style={{ "--reveal-delay": "80ms", color: "var(--ink)" } as React.CSSProperties}
        >
          {title}
        </h1>
        {lede && (
          <p
            className="reveal mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ "--reveal-delay": "160ms", color: "var(--ink-soft)" } as React.CSSProperties}
          >
            {lede}
          </p>
        )}
        {meta && meta.length > 0 && (
          <div
            className="reveal mt-8 flex flex-wrap gap-x-10 gap-y-3"
            style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          >
            {meta.map((m) => (
              <span key={m} className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
                {m}
              </span>
            ))}
          </div>
        )}
      </div>
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(to right, rgba(185,154,85,0.5), rgba(185,154,85,0.06))" }}
      />
    </section>
  );
}
