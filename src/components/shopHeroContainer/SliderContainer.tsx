import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { SliderImagesView } from "./SliderImagesView";

export const SliderContainer = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { direction: "rtl", loop: true },
    [Autoplay()],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    autoplay.play();
  }, [emblaApi]);

  return (
    <div className="embla" dir="rtl">
      <div className="embla__viewport" ref={emblaRef}>
        <SliderImagesView />
      </div>
    </div>
  );
};
