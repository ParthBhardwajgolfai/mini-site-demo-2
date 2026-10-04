import { PageHeader } from "@/components/PageHeader";
import { Results } from "@/sections/Results";
import { PrizeMoney } from "@/sections/PrizeMoney";
import { usePageTitle } from "@/hooks/usePageTitle";

/** Results — final standings with earnings followed by the full payout
 *  breakdown. */
export default function ResultsPage() {
  usePageTitle("Results");

  return (
    <>
      <PageHeader
        eyebrow="Final Standings"
        title="Results & Prize Money"
        lede="Official final results and the complete payout breakdown following the completion of the fourth round on Sunday 15 March 2026."
      />
      <Results index="01" showHeading={false} />
      <PrizeMoney index="02" />
    </>
  );
}
