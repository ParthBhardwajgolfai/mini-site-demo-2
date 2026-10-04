import { useEffect, useState } from "react";
import { tournament, champion } from "@/data/tournament";
import { Flag } from "@/components/Flag";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number) =>
    ({
      opacity: loaded ? 1 : 0,
      transform: loaded ? "translateY(0)" : "translateY(26px)",
      transition: `opacity 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }) as React.CSSProperties;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden lg:h-[56.25vw] lg:min-h-0"
      style={{ background: "var(--ink)" }}
    >
      {/* background image — full-bleed at every size: on desktop the section
          matches the photo's 16:9 aspect exactly (no crop, no zoom); on
          mobile/tablet it covers the full screen, framed on the player */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Rashid Khan in action during the opening round at Kalhaar Blues & Greens"
          className="h-full w-full object-cover object-center"
        />
        {/* top scrim only, so the fixed header stays readable over the bright boards */}
        <div
          className="absolute inset-x-0 top-0 h-36 md:h-44"
          style={{ background: "linear-gradient(to bottom, rgba(10,18,13,0.85) 0%, rgba(10,18,13,0.45) 50%, rgba(10,18,13,0) 100%)" }}
        />
        {/* small-screen readability: darker behind the title and the info rows,
            clearer band across the middle where the player is */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: "linear-gradient(to bottom, rgba(10,18,13,0.78) 0%, rgba(10,18,13,0.45) 30%, rgba(10,18,13,0.14) 52%, rgba(10,18,13,0.16) 64%, rgba(10,18,13,0.62) 100%)" }}
        />
      </div>

      {/* live status chip */}
      <div className="absolute right-6 top-24 hidden md:right-10 md:top-28 md:block" style={fade(900)}>
        <div className="flex items-center gap-2.5 border border-white/25 px-4 py-2" style={{ backdropFilter: "blur(8px)", background: "rgba(10,18,13,0.35)" }}>
          <span className="live-dot h-2 w-2 rounded-full" style={{ background: "var(--gold-soft)" }} />
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/90">{tournament.status}</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-24 pb-16 md:px-10 md:pb-24 lg:pt-0">
        <p className="text-[12px] uppercase tracking-[0.3em] text-white/70" style={{ ...fade(300), textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>
          {tournament.sanction}
        </p>

        <h1 className="font-display mt-6 max-w-5xl text-[13vw] font-light leading-[0.98] tracking-tight text-white sm:text-7xl md:text-8xl" style={{ ...fade(450), textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>
          {tournament.name}
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 text-white/85" style={fade(600)}>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50" style={{ textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>Dates</p>
            <p className="font-display mt-1 text-lg italic" style={{ textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>{tournament.dates}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50" style={{ textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>Venue</p>
            <p className="font-display mt-1 text-lg italic" style={{ textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>{tournament.venue}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50" style={{ textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>Purse</p>
            <p className="font-display mt-1 text-lg italic" style={{ color: "var(--gold-soft)", textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>
              {tournament.purse}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50" style={{ textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>Winning Score</p>
            <p className="font-display mt-1 text-lg italic" style={{ color: "var(--gold-soft)", textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>
              {champion.score} · {champion.total}
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4" style={fade(680)}>
          <div className="cine-frame is-visible h-14 w-14 shrink-0 overflow-hidden rounded-full" style={{ border: "2px solid var(--gold)" }}>
            <img src={champion.photo} alt={champion.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50" style={{ textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>Champion</p>
            <p className="font-display flex items-center gap-2 text-xl italic text-white" style={{ textShadow: "0 2px 14px rgba(10,18,13,0.6), 0 4px 40px rgba(10,18,13,0.45)" }}>
              {champion.name}
              <Flag code={champion.flag} cc={champion.countryCode} />
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4" style={fade(750)}>
          <a
            href="#leaderboard"
            className="px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors"
            style={{ background: "var(--ivory)", color: "var(--ink)" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "var(--gold-soft)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "var(--ivory)")}
          >
            View Leaderboard
          </a>
          <a
            href="#overview"
            className="border border-white/40 px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
          >
            The Championship
          </a>
        </div>
      </div>
    </section>
  );
}
