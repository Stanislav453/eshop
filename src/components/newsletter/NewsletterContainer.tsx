import { Suspense, useRef } from "react";
import NewsletterContent from "./NewsletterContent";
import { Skeleton } from "../common/Skeleton.tsx/Skeleton";
import useFirstViewportEntry from "../../hooks/useFirstViewportEntry";

export const NewsletterContainer = () => {
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
        <Suspense
          fallback={<Skeleton placeholdersCount={1} skeletonHeight={150} />}
        >
          <NewsletterContent />
        </Suspense>
      )}
    </section>
  );
};
