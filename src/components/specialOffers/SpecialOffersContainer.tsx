import { lazy, Suspense, useRef } from "react";
import useFirstViewportEntry from "../../hooks/useFirstViewportEntry";

const SpecialOffersContent = lazy(() => import("./SpecialOffersContent"));

export const SpecialOffersContainer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const entered = useFirstViewportEntry({
    ref: sectionRef,
    observerOptions: {
      threshold: 0,
      root: null,
      rootMargin: "0px",
    },
  });

  return (
    <section ref={sectionRef} style={{ minHeight: 1200 }}>
      {entered && (
        <Suspense fallback={<div>Loading special offers...</div>}>
          <SpecialOffersContent />
        </Suspense>
      )}
    </section>
  );
};
