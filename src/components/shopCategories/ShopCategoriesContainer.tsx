import useEmblaCarousel from "embla-carousel-react";
import { DashboardLayout } from "../common/DashboardLayout";
import { ImageCarousel } from "./ImageCarousel";
import { usePrevNextButtons } from "../../hooks/usePrevNextButtons";
import { AdvertisingBannersContainer } from "./AdvertisingBannersContainer";
import { ShopCategoriesHeader } from "./ShopCategoriesHeader";
import { useGetData } from "../../hooks/useGetData";

export const ShopCategoriesContainer = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const { data, isError, isPending, error } = useGetData({
    endpoint: "categories",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);


  return (
    <DashboardLayout sectionClassName="mt-24" direction="flex-col">
      <ShopCategoriesHeader
        onPrevButtonClick={onPrevButtonClick}
        onNextButtonClick={onNextButtonClick}
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
      />
      <ImageCarousel
        isError={isError}
        isPending={isPending}
        data={data}
        emblaRef={emblaRef}
        error={error}
      />
      <AdvertisingBannersContainer />
    </DashboardLayout>
  );
};
