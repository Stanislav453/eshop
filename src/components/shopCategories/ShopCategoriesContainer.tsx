import useEmblaCarousel from "embla-carousel-react";
import { DashboardLayout } from "../common/DashboardLayout";
import { ImageCarousel } from "./ImageCarousel";
import { NextButtonView } from "./NextButtonView";
import { PrevButtonView } from "./PrewButtonView";
import { usePrevNextButtons } from "./useCarouselNavigation";
import { useQuery } from "@tanstack/react-query";
import { AdvertisingBannersContainer } from "./AdvertisingBannersContainer";

export const ShopCategoriesContainer = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://696cdbeff4a79b31517ff504.mockapi.io/categories").then(
        (res) => res.json(),
      ),
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  if (!data) return null;

  return (
    <DashboardLayout>
      <div className="w-full mt-24 ">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[2rem] font-bold text-neutral-primary">
            Shop categories
          </h2>
          <div className="flex items-cente">
            <div className="embla__controls">
              <div className="embla__buttons">
                <PrevButtonView
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButtonView
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </div>
        </div>
        <ImageCarousel data={data} emblaRef={emblaRef} />
        <AdvertisingBannersContainer />
      </div>
    </DashboardLayout>
  );
};
