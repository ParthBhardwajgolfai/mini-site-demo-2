import { PageHeader } from "@/components/PageHeader";
import { ScheduleHighlights } from "@/components/home/ScheduleHighlights";
import { TeeTimes } from "@/sections/TeeTimes";
import { tournament } from "@/data/tournament";
import { usePageTitle } from "@/hooks/usePageTitle";

/** Schedule — the championship week at a glance plus the official draw. */
export default function SchedulePage() {
  usePageTitle("Schedule");

  return (
    <>
      <PageHeader
        eyebrow="The Draw"
        title="Schedule & Tee Times"
        lede={`${tournament.format} · official starting times and groupings for every round, as published by the tour.`}
      />
      <ScheduleHighlights cta={false} />
      <TeeTimes showHeading={false} />
    </>
  );
}
