export interface SiteNavItem {
  to: string;
  label: string;
}

/** Primary navigation — one entry per route. */
export const siteNav: SiteNavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/players", label: "Players" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/schedule", label: "Schedule" },
  { to: "/results", label: "Results" },
  { to: "/news", label: "News" },
  { to: "/gallery", label: "Gallery" },
  { to: "/partners", label: "Partners" },
];
