import { lazy } from "react";
import { Route, Routes } from "react-router";
import { Layout } from "@/components/layout/Layout";

// The home page loads eagerly; every other route is code-split.
const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const PlayersPage = lazy(() => import("@/pages/PlayersPage"));
const LeaderboardPage = lazy(() => import("@/pages/LeaderboardPage"));
const SchedulePage = lazy(() => import("@/pages/SchedulePage"));
const ResultsPage = lazy(() => import("@/pages/ResultsPage"));
const NewsPage = lazy(() => import("@/pages/NewsPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const PartnersPage = lazy(() => import("@/pages/PartnersPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
