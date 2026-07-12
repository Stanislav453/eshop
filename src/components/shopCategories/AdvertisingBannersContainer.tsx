import { lazy, Suspense, useRef } from "react";
import useFirstViewportEntry from "../../hooks/useFirstViewportEntry.tsx";
import { Skeleton } from "../common/Skeleton.tsx/Skeleton.tsx";

const AdvertisingBannersContent = lazy(
  () => import("./AdvertisingBannersContent.tsx"),
);

export const AdvertisingBannersContainer = () => {
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
    <section style={{ minHeight: 700 }} ref={sectionRef}>
      {entered && (
        <Suspense
          fallback={<Skeleton placeholdersCount={3} skeletonHeight={700} />}
        >
          <AdvertisingBannersContent />
        </Suspense>
      )}
    </section>
  );
};
