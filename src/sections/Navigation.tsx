import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, tickerPartners } from "@/data/tournament";
import { useScrollProgress } from "@/hooks/useGolf";

/** Vertical sponsor carousel: one logo clearly visible for 2s, then a smooth
 *  vertical slide to the next. The first logo is duplicated at the end of the
 *  stack so the loop wraps seamlessly without ever rolling empty. */
function PartnerTicker() {
  const [idx, setIdx] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimate(true);
      setIdx((i) => i + 1);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  // after sliding onto the duplicated first logo, snap back (no animation) to the real one
  useEffect(() => {
    if (idx === tickerPartners.length) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIdx(0);
      }, 750);
      return () => clearTimeout(t);
    }
  }, [idx]);

  const stack = [...tickerPartners, tickerPartners[0]];

  return (
    <div className="hidden h-10 w-32 shrink-0 overflow-hidden md:block" aria-label="Tour sponsors">
      <div
        className="will-change-transform"
        style={{
          transform: `translateY(-${idx * 100}%)`,
          transition: animate ? "transform 700ms ease-in-out" : "none",
        }}
      >
        {stack.map((p, i) => (
          <div key={`${p.src}-${i}`} className="flex h-10 items-center justify-center">
            <img
              src={p.src}
              alt={p.alt}
              title={p.alt}
              loading="lazy"
              className="max-h-8 w-auto max-w-[122px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Navigation() {
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "";
      for (const l of navLinks) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = l.id;
      }
      setActive(current);
    };
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
          background: scrolled ? "rgba(250,248,241,0.94)" : "rgba(10,18,13,0.45)",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 md:px-10 py-3">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <img
              src="/images/golfai-logo.png"
              alt="GolfAI"
              className="h-9 w-auto md:h-10"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-[12px] uppercase tracking-[0.16em] font-medium transition-colors hover:opacity-100"
                style={{
                  color: scrolled
                    ? active === l.id
                      ? "var(--forest)"
                      : "var(--ink-soft)"
                    : active === l.id
                      ? "#fff"
                      : "rgba(255,255,255,0.88)",
                  opacity: scrolled && active === l.id ? 1 : 0.9,
                  borderBottom: active === l.id ? "1px solid var(--gold)" : "1px solid transparent",
                  paddingBottom: 2,
                  textShadow: scrolled ? "none" : "0 1px 8px rgba(10,18,13,0.65)",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <span className="h-5 w-px" style={{ background: scrolled ? "var(--hairline)" : "rgba(255,255,255,0.25)" }} />
            <PartnerTicker />
          </div>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            style={{ color: scrolled || open ? "var(--ink)" : "#fff" }}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-6 pt-2" style={{ background: "rgba(250,248,241,0.97)", backdropFilter: "blur(14px)" }}>
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.18em] hairline-b"
              style={{ color: "var(--ink)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
