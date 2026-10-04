import { useReveal } from "@/hooks/useGolf";

interface Props {
  /** Section number within the page — omitted for unnumbered sections. */
  index?: string;
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}

export function SectionHeading({ index, eyebrow, title, lede, align = "left" }: Props) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`mb-14 md:mb-20 ${align === "center" ? "text-center" : ""}`}>
      <div className={`reveal flex items-baseline gap-4 ${align === "center" ? "justify-center" : ""}`}>
        {index && (
          <span className="font-display text-sm italic" style={{ color: "var(--gold)" }}>
            {index}
          </span>
        )}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2
        className="reveal font-display mt-5 text-4xl md:text-6xl font-light leading-[1.05] tracking-tight"
        style={{ "--reveal-delay": "80ms", color: "var(--ink)" } as React.CSSProperties}
      >
        {title}
      </h2>
      {lede && (
        <p
          className="reveal mt-6 max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ "--reveal-delay": "160ms", color: "var(--ink-soft)" } as React.CSSProperties}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
