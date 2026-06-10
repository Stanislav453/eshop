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

  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => setEntered(entry.isIntersecting),
      observerOptions,
    ),
  );

  useEffect(() => {
    const element = ref.current;
    const ob = observer.current;

    if (entered) {
      ob.disconnect();
      return;
    }

    if (element && !entered) ob.observe(element);

    return () => ob.disconnect();
  }, [entered, ref]);

  return entered;
};

export default useFirstViewportEntry;
