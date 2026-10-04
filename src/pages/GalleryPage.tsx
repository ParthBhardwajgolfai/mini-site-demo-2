import { PageHeader } from "@/components/PageHeader";
import { Gallery } from "@/sections/Gallery";
import { usePageTitle } from "@/hooks/usePageTitle";

/** Gallery — the complete championship media collection. */
export default function GalleryPage() {
  usePageTitle("Gallery");

  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="The week in frames"
        lede="Press conference, practice and tournament action — the Indorama Ventures Open 2026 as it unfolded in Ahmedabad."
      />
      <Gallery showHeading={false} />
    </>
  );
}
