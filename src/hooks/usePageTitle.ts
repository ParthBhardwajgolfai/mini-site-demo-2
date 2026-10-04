import { useEffect } from "react";
import { tournament } from "@/data/tournament";

/** Sets the document title for the current page. */
export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} · ${tournament.name}` : tournament.name;
  }, [page]);
}
