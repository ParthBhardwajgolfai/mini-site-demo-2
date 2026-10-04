import { PageHeader } from "@/components/PageHeader";
import { Overview } from "@/sections/Overview";
import { Course } from "@/sections/Course";
import { Venue } from "@/sections/Venue";
import { tournament } from "@/data/tournament";
import { usePageTitle } from "@/hooks/usePageTitle";

/** About — the championship story, the official course card and the venue. */
export default function AboutPage() {
  usePageTitle("About");

  return (
    <>
      <PageHeader
        eyebrow="Tournament Information"
        title="The Championship"
        lede={`${tournament.name} · ${tournament.sanction} · ${tournament.purse} purse.`}
        meta={[tournament.dates, tournament.venue, tournament.city, tournament.format]}
      />
      <Overview index="01" />
      <Course index="02" />
      <Venue />
    </>
  );
}
