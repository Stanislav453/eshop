import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const sliderImages = [
  "../../public/slider/slider-1.webp",
  "../../public/slider/slider-2.webp",
  "../../public/slider/slider-3.webp",
];

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
        <div className="embla__container h-shop-product-container">
          {sliderImages.map((image, index) => (
            <div className="embla__slide" key={index}>
              <img className="w-full h-full" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};
