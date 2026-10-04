import { Hero } from "@/sections/Hero";
import { Overview } from "@/sections/Overview";
import { LeaderboardPreview } from "@/components/home/LeaderboardPreview";
import { FieldPreview } from "@/components/home/FieldPreview";
import { ScheduleHighlights } from "@/components/home/ScheduleHighlights";
import { NewsPreview } from "@/components/home/NewsPreview";
import { Partners } from "@/sections/Partners";
import { usePageTitle } from "@/hooks/usePageTitle";

/** Tournament home — a visually rich overview built from compact previews.
 *  Every block summarises its section and hands off to the dedicated page. */
export default function HomePage() {
  usePageTitle();

  return (
    <>
      <Hero />
      <Overview />
      <LeaderboardPreview />
      <FieldPreview />
      <ScheduleHighlights />
      <NewsPreview />
      <Partners />
    </>
  );
}
