import { Suspense, useRef } from "react";
import useFirstViewportEntry from "../../../hooks/useFirstViewportEntry";
import { Loader } from "../loader/Loader";

type RenderOnViewportEntryProps = {
  children: React.ReactNode;
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const RenderOnViewportEntry = ({
  children,
  threshold = 0,
  root = null,
  rootMargin = "0px 0px 0px 0px",
  ...wrapperDivProps
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

  return (
    <section {...wrapperDivProps} ref={sectionRef}>
      {entered && <Suspense fallback={<Loader />}>{children}</Suspense>}
    </section>
  );
};

export default RenderOnViewportEntry;
