import { Link } from "react-router";
import { PageHeader } from "@/components/PageHeader";
import { partners, tournament, type PartnerLogo } from "@/data/tournament";
import { useReveal } from "@/hooks/useGolf";
import { usePageTitle } from "@/hooks/usePageTitle";

const host = (url: string) => new URL(url).host.replace(/^www\./, "");

/** The tour's title partner, presented as a centred editorial masthead. */
function TitlePartnerFeature({ partner }: { partner: PartnerLogo }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="reveal eyebrow">Title Partner · DP World PGTI Tour</p>
        <div className="reveal mt-10 flex justify-center">
          <div className="inline-flex items-center border bg-white px-12 py-7" style={{ borderColor: "var(--hairline)" }}>
            <img
              src={partner.src}
              alt={partner.alt}
              title={partner.alt}
              loading="lazy"
              className="w-auto object-contain"
              style={{ height: 48, maxWidth: 280 }}
            />
          </div>
        </div>
        <h2 className="reveal font-display mt-10 text-5xl font-light tracking-tight md:text-6xl" style={{ "--reveal-delay": "80ms", color: "var(--ink)" } as React.CSSProperties}>
          {partner.alt}
        </h2>
        <div className="mt-8 space-y-6 text-left">
          {partner.profile?.map((p, i) => (
            <p
              key={i}
              className={`reveal leading-relaxed ${i === 0 ? "font-display text-xl md:text-2xl md:leading-snug" : "text-base md:text-lg"}`}
              style={{ "--reveal-delay": `${140 + i * 90}ms`, color: i === 0 ? "var(--ink)" : "var(--ink-soft)" } as React.CSSProperties}
            >
              {p}
            </p>
          ))}
        </div>
        {partner.url && (
          <a
            href={partner.url}
            target="_blank"
            rel="noreferrer"
            className="reveal group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors"
            style={{ "--reveal-delay": "220ms", color: "var(--forest)" } as React.CSSProperties}
          >
            Visit {host(partner.url)}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
          </a>
        )}
      </div>
    </section>
  );
}

/** One ledger row of the tour-partner index. */
function PartnerRow({ partner, index }: { partner: PartnerLogo; index: number }) {
  return (
    <article
      className="reveal row-in group grid items-center gap-x-8 gap-y-4 border p-7 transition-all duration-300 hover:border-[rgba(185,154,85,0.5)] md:grid-cols-[3.5rem_9rem_1fr_auto] md:p-8"
      style={{
        "--i": index,
        background: "var(--ivory)",
        borderColor: "var(--hairline)",
        "--reveal-delay": `${Math.min(index, 5) * 70}ms`,
      } as React.CSSProperties}
    >
      <span className="font-display hidden text-2xl font-light italic md:block" style={{ color: "rgba(185,154,85,0.65)" }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex h-12 items-center">
        <img
          src={partner.src}
          alt={partner.alt}
          title={partner.alt}
          loading="lazy"
          className="w-auto object-contain"
          style={{ height: partner.compact ? 26 : 36, maxWidth: partner.compact ? 104 : 140 }}
        />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
          {partner.category}
        </p>
        <h3 className="font-display mt-1.5 text-2xl font-light italic" style={{ color: "var(--ink)" }}>
          {partner.alt}
        </h3>
        <p className="mt-2 max-w-2xl text-[13px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          {partner.blurb}
        </p>
      </div>
      {partner.url && (
        <a
          href={partner.url}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors"
          style={{ color: "var(--ink-faint)" }}
        >
          Visit partner
          <span className="transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden>→</span>
        </a>
      )}
    </article>
  );
}

/** A media partner presented as a refined card. */
function MediaPartnerCard({ partner, index }: { partner: PartnerLogo; index: number }) {
  return (
    <article
      className="reveal group flex flex-col items-center p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(185,154,85,0.5)]"
      style={{
        background: "rgba(255,255,255,0.55)",
        border: "1px solid var(--hairline)",
        "--reveal-delay": `${index * 110}ms`,
      } as React.CSSProperties}
    >
      <div className="flex h-14 items-center">
        <img
          src={partner.src}
          alt={partner.alt}
          title={partner.alt}
          loading="lazy"
          className="w-auto object-contain"
          style={{ height: partner.compact ? 30 : 42, maxWidth: 170 }}
        />
      </div>
      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
        {partner.category}
      </p>
      <h3 className="font-display mt-2 text-2xl font-light italic" style={{ color: "var(--ink)" }}>
        {partner.alt}
      </h3>
      <p className="mt-3 max-w-sm text-[13px] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        {partner.blurb}
      </p>
      {partner.url && (
        <a
          href={partner.url}
          target="_blank"
          rel="noreferrer"
          className="group/link mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors"
          style={{ color: "var(--ink-faint)" }}
        >
          Visit {host(partner.url)}
          <span className="transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden>→</span>
        </a>
      )}
    </article>
  );
}

/** Partners — content and categorization follow the official tour page
 *  (pgtofindia.com/tour-partners); structure and presentation are this
 *  site's own, in the light design language. */
export default function PartnersPage() {
  usePageTitle("Partners");
  const rosterRef = useReveal<HTMLElement>();
  const mediaRef = useReveal<HTMLElement>();
  const ctaRef = useReveal<HTMLElement>();

  const titlePartner = partners.find((p) => p.profile);
  const tourPartners = partners.filter((p) => p.tier === "tour" && !p.profile);
  const mediaPartners = partners.filter((p) => p.tier === "partner");

  return (
    <>
      <PageHeader
        eyebrow="Partnership"
        title="Our Partners"
        lede="Our valued partners play a vital role in supporting tournaments, players, and the continued development of professional golf nationwide."
        meta={[tournament.sanction, tournament.dates]}
      />

      {titlePartner && <TitlePartnerFeature partner={titlePartner} />}

      {/* ── Tour partner index ────────────────────── */}
      <section ref={rosterRef} className="py-20 md:py-28" style={{ background: "var(--ivory-deep)" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                Tour Partners
              </p>
              <h2 className="font-display mt-4 text-3xl font-light tracking-tight md:text-5xl" style={{ color: "var(--ink)" }}>
                Seven brands behind the tour.
              </h2>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
              2026 season · DP World PGTI
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {tourPartners.map((p, i) => (
              <PartnerRow key={p.src} partner={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Championship partners (media) ─────────── */}
      <section ref={mediaRef} className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="reveal mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--gold)" }}>
                Championship Partners
              </p>
              <h2 className="font-display mt-4 text-3xl font-light tracking-tight md:text-5xl" style={{ color: "var(--ink)" }}>
                The storytellers.
              </h2>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--ink-faint)" }}>
              {mediaPartners.length} partners
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {mediaPartners.map((p, i) => (
              <MediaPartnerCard key={p.src} partner={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ───────────────────────────────── */}
      <section ref={ctaRef} className="py-20 md:py-28" style={{ background: "var(--ivory-deep)" }}>
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <p className="reveal eyebrow">Partner with the tour</p>
          <h2 className="reveal font-display mx-auto mt-5 max-w-3xl text-4xl font-light leading-[1.05] tracking-tight md:text-6xl" style={{ "--reveal-delay": "80ms", color: "var(--ink)" } as React.CSSProperties}>
            Great golf runs on great partners.
          </h2>
          <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ "--reveal-delay": "160ms", color: "var(--ink-soft)" } as React.CSSProperties}>
            The {tournament.name} is presented with the support of brands that share in the game — on course and beyond it. Their backing carries professional golf across India.
          </p>
          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4" style={{ "--reveal-delay": "240ms" } as React.CSSProperties}>
            <a
              href="https://www.pgtofindia.com/tour-partners"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors"
              style={{ background: "var(--forest)", color: "var(--ivory)" }}
            >
              The DP World PGTI Tour
              <span aria-hidden>→</span>
            </a>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 border px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[rgba(29,69,49,0.05)]"
              style={{ borderColor: "rgba(23,26,21,0.35)", color: "var(--ink)" }}
            >
              See the week in pictures
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
