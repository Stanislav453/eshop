import { lazy, Suspense, useRef } from "react";
import useFirstViewportEntry from "../../../hooks/useFirstViewportEntry";
import { Skeleton } from "../../common/Skeleton.tsx/Skeleton";
const BrandContent = lazy(() => import("./BrandContent"));

export const BrandContainer = () => {
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
    <section ref={sectionRef} style={{ minHeight: 150 }}>
      {entered && (
        <Suspense fallback={<Skeleton placeholdersCount={8} skeletonHeight={150} />}>
          <BrandContent />
        </Suspense>
      )}
    </section>
  );
};
