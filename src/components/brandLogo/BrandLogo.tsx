import { DashboardLayout } from "../common/DashboardLayout";
import brnadLogo1 from "../../../public/logo/brand-logo-1.webp";
import brnadLogo2 from "../../../public/logo/brand-logo-2.webp";
import brnadLogo3 from "../../../public/logo/brand-logo-3.avif";
import brnadLogo4 from "../../../public/logo/brand-logo-4.webp";
import brnadLogo5 from "../../../public/logo/brand-logo-5.webp";
import brnadLogo6 from "../../../public/logo/brand-logo-6.webp";
import brnadLogo7 from "../../../public/logo/brand-logo-7.webp";
import brnadLogo8 from "../../../public/logo/brand-logo-8.webp";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

export const BrandLogo = () => {
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
    <DashboardLayout sectionClassName="mt-24" direction="flex-col">
      <div className="embla__shop_brand_controls border-b pb-12">
        <div className="embla__viewport" ref={emblaRef}>
          <ul className="embla__container_brand">
            <li className="embla__shop_brand">
              <div className="embla__slide__number_brand">
                <div>
                  <img
                    src={brnadLogo1}
                    alt="Brand Logo 1"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </li>
            <li className="embla__shop_brand">
              <div className="embla__slide__number_brand">
                <div>
                  <img
                    src={brnadLogo2}
                    alt="Brand Logo 2"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </li>
            <li className="embla__shop_brand">
              <div className="embla__slide__number_brand">
                <div>
                  <img
                    src={brnadLogo3}
                    alt="Brand Logo 3"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </li>
            <li className="embla__shop_brand">
              <div className="embla__slide__number_brand">
                <div>
                  <img
                    src={brnadLogo4}
                    alt="Brand Logo 4"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </li>
            <li className="embla__shop_brand">
              <div className="embla__slide__number_brand">
                <div>
                  <img
                    src={brnadLogo5}
                    alt="Brand Logo 5"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </li>
            <li className="embla__shop_brand">
              <div className="embla__slide__number_brand">
                <div>
                  <img
                    src={brnadLogo6}
                    alt="Brand Logo 6"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </li>
            <li className="embla__shop_brand">
              <div className="embla__slide__number_brand">
                <div>
                  <img
                    src={brnadLogo7}
                    alt="Brand Logo 7"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </li>
            <li className="embla__shop_brand">
              <div className="embla__slide__number_brand">
                <div>
                  <img
                    src={brnadLogo8}
                    alt="Brand Logo 8"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};
