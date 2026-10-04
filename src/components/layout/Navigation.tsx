import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";
import { tickerPartners } from "@/data/tournament";
import { siteNav } from "@/data/nav";
import { useScrollProgress } from "@/hooks/useGolf";

/** Header sponsor rotator — crossfade style: logos sit directly on the navbar,
 *  one clearly visible at a time (2s hold), swapping with a plain opacity
 *  crossfade so two briefly overlap and the slot is never empty. Pauses on
 *  hover; shorter fade under prefers-reduced-motion. */
function PartnerTicker() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % tickerPartners.length), 2000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      className="relative hidden h-9 w-32 shrink-0 overflow-hidden md:block"
      aria-label={`Tour sponsor: ${tickerPartners[idx].alt}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {tickerPartners.map((p, i) => (
        <img
          key={p.src}
          src={p.src}
          alt={i === idx ? p.alt : ""}
          title={p.alt}
          loading="lazy"
          className="absolute inset-0 m-auto max-h-8 w-auto max-w-[122px] object-contain"
          style={{
            opacity: i === idx ? 1 : 0,
            transition: `opacity ${reduced ? 0.15 : 0.6}s ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

export function Navigation() {
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Inner pages open on a light header; the home hero keeps the
  // transparent-over-photo treatment until the user scrolls.
  const isHome = location.pathname === "/";
  const light = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* scroll progress */}
      <div className="h-[2px] w-full bg-transparent">
        <div className="h-full transition-[width] duration-150" style={{ width: `${progress * 100}%`, background: "var(--gold)" }} />
      </div>
      <div
        className="transition-all duration-500"
        style={{
          background: light ? "rgba(250,248,241,0.94)" : "rgba(10,18,13,0.45)",
          backdropFilter: "blur(14px)",
          borderBottom: light ? "1px solid var(--hairline)" : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 md:px-10 py-3">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img
              src="/images/golfai-logo.png"
              alt="GolfAI"
              className="h-9 w-auto md:h-10"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {siteNav.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className="text-[12px] uppercase tracking-[0.16em] font-medium transition-colors hover:opacity-100"
                style={({ isActive }) => ({
                  color: light
                    ? isActive
                      ? "var(--forest)"
                      : "var(--ink-soft)"
                    : isActive
                      ? "#fff"
                      : "rgba(255,255,255,0.88)",
                  opacity: light && isActive ? 1 : 0.9,
                  borderBottom: isActive ? "1px solid var(--gold)" : "1px solid transparent",
                  paddingBottom: 2,
                  textShadow: light ? "none" : "0 1px 8px rgba(10,18,13,0.65)",
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <span className="h-5 w-px" style={{ background: light ? "var(--hairline)" : "rgba(255,255,255,0.25)" }} />
            <PartnerTicker />
          </div>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            style={{ color: light || open ? "var(--ink)" : "#fff" }}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden max-h-[calc(100svh-64px)] overflow-y-auto px-6 pb-6 pt-2" style={{ background: "rgba(250,248,241,0.97)", backdropFilter: "blur(14px)" }}>
          {siteNav.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm uppercase tracking-[0.18em] hairline-b ${isActive ? "font-semibold" : ""}`
              }
              style={({ isActive }) => ({ color: isActive ? "var(--forest)" : "var(--ink)" })}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
