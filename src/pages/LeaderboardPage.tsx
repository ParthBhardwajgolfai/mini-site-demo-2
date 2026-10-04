import { PageHeader } from "@/components/PageHeader";
import { Leaderboard } from "@/sections/Leaderboard";
import { tournament } from "@/data/tournament";
import { usePageTitle } from "@/hooks/usePageTitle";

/** Leaderboard — the complete final standings plus every round's standings
 *  with expandable scorecards. */
export default function LeaderboardPage() {
  usePageTitle("Leaderboard");

  return (
    <>
      <PageHeader
        eyebrow="Scoring"
        title="Leaderboard"
        lede={`${tournament.statusDetail} · Par ${tournament.par} · ${tournament.venue} · ${tournament.yardage.toLocaleString("en-IN")} yards`}
      />
      <Leaderboard showHeading={false} />
    </>
  );
}
