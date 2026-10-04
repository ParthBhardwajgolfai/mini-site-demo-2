import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

/** Scrolls to the top of the page whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function PageFallback() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center" style={{ background: "var(--ivory)" }}>
      <span className="live-dot h-2 w-2 rounded-full" style={{ background: "var(--gold)" }} />
    </div>
  );
}

export function Layout() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <ScrollToTop />
      <Navigation />
      <main>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
