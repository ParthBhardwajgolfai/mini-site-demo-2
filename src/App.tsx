import { Navigation } from "@/sections/Navigation";
import { Hero } from "@/sections/Hero";
import { Overview } from "@/sections/Overview";
import { Course } from "@/sections/Course";
import { Leaderboard } from "@/sections/Leaderboard";
import { TeeTimes } from "@/sections/TeeTimes";
import { Field } from "@/sections/Field";
import { Results } from "@/sections/Results";
import { PrizeMoney } from "@/sections/PrizeMoney";
import { Gallery } from "@/sections/Gallery";
import { News } from "@/sections/News";
import { Venue } from "@/sections/Venue";
import { Partners } from "@/sections/Partners";
import { Footer } from "@/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <Navigation />
      <main>
        <Hero />
        <Overview />
        <Course />
        <Leaderboard />
        <TeeTimes />
        <Field />
        <Results />
        <PrizeMoney />
        <Gallery />
        <News />
        <Venue />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
