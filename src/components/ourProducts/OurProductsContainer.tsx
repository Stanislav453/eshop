import { lazy, Suspense, useRef } from "react";
import useFirstViewportEntry from "../../hooks/useFirstViewportEntry";

const OurProductsContent = lazy(() => import("./OurProductsContent"));

export const OurProductsContainer = () => {
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
    <section style={{ minHeight: 400 }} ref={sectionRef}>
      {entered && (
        <Suspense fallback={<div>Loading our products...</div>}>
          <OurProductsContent />
        </Suspense>
      )}
    </section>
  );
};
