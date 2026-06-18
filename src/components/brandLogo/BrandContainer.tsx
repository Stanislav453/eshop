import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { BrandView } from "./BrandView";
import { brandLogos } from "./brandLogo";

const BrandContainer = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay()],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    autoplay.play();
  }, [emblaApi]);
  return (
    <>
      <div className="embla__shop_brand_controls border-b pb-12">
        <div className="embla__viewport" ref={emblaRef}>
          <ul className="embla__container_brand">
            {brandLogos.map((logo) => (
              <BrandView key={logo} src={logo} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BrandContainer;
