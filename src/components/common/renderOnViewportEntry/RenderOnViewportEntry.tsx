import { Suspense, useRef } from "react";
import useFirstViewportEntry from "../../../hooks/useFirstViewportEntry";
import { Skeleton } from "../Skeleton.tsx/Skeleton";
import type { RenderOnViewportEntryProps } from "../../../type";

const RenderOnViewportEntry = ({
  children,
  threshold = 0,
  root = null,
  rootMargin = "0px 0px 0px 0px",
  suspenseActive = false,
  placeholderCount,
  minHeight,
}: RenderOnViewportEntryProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const entered = useFirstViewportEntry({
    ref: sectionRef,
    observerOptions: {
      threshold,
      root,
      rootMargin,
    },
  });

  const isSuspenseActive = suspenseActive ? (
    <Suspense
      fallback={
        <Skeleton
          placeholdersCount={placeholderCount}
          skeletonHeight={minHeight}
        />
      }
    >
      {children}
    </Suspense>
  ) : (
    <>{children}</>
  );

  return (
    <section style={{ minHeight: minHeight }} ref={sectionRef}>
      {entered && isSuspenseActive}
    </section>
  );
};

export default RenderOnViewportEntry;
