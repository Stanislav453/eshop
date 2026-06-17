import { useEffect, useRef, useState } from "react";

type useFirstViewportEntryType = {
  ref: React.RefObject<HTMLElement | null>;
  observerOptions: {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
  };
};

const useFirstViewportEntry = ({
  ref,
  observerOptions,
}: useFirstViewportEntryType) => {
  const [entered, setEntered] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (entered) {
      observer.current?.disconnect();
      return;
    }

    if (observer.current === null) {
      observer.current = new IntersectionObserver(
        ([entry]) => setEntered(entry.isIntersecting),
        observerOptions,
      );
    }

    const ob = observer.current;
    if (!ob) return;

    const element = ref.current;
    if (element) ob.observe(element);

    return () => ob.disconnect();
  }, [entered, ref]);

  return entered;
};

export default useFirstViewportEntry;
