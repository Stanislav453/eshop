import brandLogo1 from "../../../public/logo/brand-logo-1.webp";
import brandLogo2 from "../../../public/logo/brand-logo-2.webp";
import brandLogo3 from "../../../public/logo/brand-logo-3.avif";
import brandLogo4 from "../../../public/logo/brand-logo-4.webp";
import brandLogo5 from "../../../public/logo/brand-logo-5.webp";
import brandLogo6 from "../../../public/logo/brand-logo-6.webp";
import brandLogo7 from "../../../public/logo/brand-logo-7.webp";
import brandLogo8 from "../../../public/logo/brand-logo-8.webp";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { BrandView } from "./BrandView";

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
    <section>
      <div className="embla__shop_brand_controls border-b pb-12">
        <div className="embla__viewport" ref={emblaRef}>
          <ul className="embla__container_brand">
            <BrandView src={brandLogo1} />
            <BrandView src={brandLogo2} />
            <BrandView src={brandLogo3} />
            <BrandView src={brandLogo4} />
            <BrandView src={brandLogo5} />
            <BrandView src={brandLogo6} />
            <BrandView src={brandLogo7} />
            <BrandView src={brandLogo8} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BrandContainer;