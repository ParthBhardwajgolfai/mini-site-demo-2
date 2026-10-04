import { PageHeader } from "@/components/PageHeader";
import { Field } from "@/sections/Field";
import { usePageTitle } from "@/hooks/usePageTitle";

/** Players — the complete 265-player entry list with search, category
 *  filters and pagination. */
export default function PlayersPage() {
  usePageTitle("Players");

  return (
    <>
      <PageHeader
        eyebrow="The Players"
        title="The Field"
        lede="Order of Merit champions, multiple tour winners, a strong international contingent and Qualifying School graduates — the full entry list as published by the DP World PGTI."
      />
      <Field showHeading={false} />
    </>
  );
}
