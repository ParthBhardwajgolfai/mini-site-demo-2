import { PageHeader } from "@/components/PageHeader";
import { News } from "@/sections/News";
import { usePageTitle } from "@/hooks/usePageTitle";

/** News — every report from the championship week. */
export default function NewsPage() {
  usePageTitle("News");

  return (
    <>
      <PageHeader
        eyebrow="Tournament News"
        title="Stories from the week"
        lede="Reports from the DP World PGTI media team across all four days of the championship in Ahmedabad."
      />
      <News showHeading={false} />
    </>
  );
}
