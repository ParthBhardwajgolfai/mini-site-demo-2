import { Link } from "react-router";

interface ViewAllProps {
  to: string;
  children: React.ReactNode;
  /** "solid" = filled (light sections) · "outline" = bordered (dark sections). */
  variant?: "solid" | "outline" | "gold";
}

/** Consistent "View all …" call-to-action used by every preview block. */
export function ViewAll({ to, children, variant = "solid" }: ViewAllProps) {
  const styles: React.CSSProperties =
    variant === "solid"
      ? { background: "var(--ivory)", color: "var(--ink)" }
      : variant === "gold"
        ? { background: "var(--gold)", color: "var(--ink)" }
        : { border: "1px solid rgba(23,26,21,0.35)", color: "var(--ink)" };

  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[rgba(29,69,49,0.05)]"
      style={styles}
    >
      {children}
      <span
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      >
        →
      </span>
    </Link>
  );
}
