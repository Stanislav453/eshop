import { lazy, Suspense, useRef } from "react";
import { Skeleton } from "../common/Skeleton.tsx/Skeleton";
import useFirstViewportEntry from "../../hooks/useFirstViewportEntry";

const OfferBannerView = lazy(() => import("./OfferBannerView"));

export const OfferBannerContainer = () => {
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
    <section style={{ minHeight: 450 }} ref={sectionRef}>
      {entered && (
        <Suspense
          fallback={<Skeleton placeholdersCount={1} skeletonHeight={350} />}
        >
          <OfferBannerView />
        </Suspense>
      )}
    </section>
  );
};
