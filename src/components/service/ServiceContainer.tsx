import { lazy, Suspense, useRef } from "react";
import { Skeleton } from "../common/Skeleton.tsx/Skeleton";
import useFirstViewportEntry from "../../hooks/useFirstViewportEntry";

const ServiceContent = lazy(() => import("./ServiceContent"));

export const ServiceContainer = () => {
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
    <section ref={sectionRef} style={{ minHeight: 100 }}>
      {entered && (
        <Suspense
          fallback={<Skeleton placeholdersCount={4} skeletonHeight={100} />}
        >
          <ServiceContent />
        </Suspense>
      )}
    </section>
  );
};
