import { lazy, Suspense, useRef } from "react";
import useFirstViewportEntry from "../../hooks/useFirstViewportEntry";

const ShopCategoriesContent = lazy(() => import("./ShopCategoriesContent"));

export const ShopCategoriesContainer = () => {
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
    <section ref={sectionRef} style={{ minHeight: 300 }}>
      {entered && (
        <Suspense fallback={<div>Loading shop categories...</div>}>
          <ShopCategoriesContent />
        </Suspense>
      )}
    </section>
  );
};
