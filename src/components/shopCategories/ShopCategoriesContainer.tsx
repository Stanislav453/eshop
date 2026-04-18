import useEmblaCarousel from "embla-carousel-react";
import { DashboardLayout } from "../common/DashboardLayout";
import { ImageCarousel } from "./ImageCarousel";
import { usePrevNextButtons } from "../../hooks/usePrevNextButtons";
import { AdvertisingBannersContainer } from "./AdvertisingBannersContainer";
import { useGetData } from "../../hooks/useGetData";
import type { CategoryType } from "../../type";
import { ErrorActive } from "../common/ErrorActive";
import { SectionArrowHeader } from "./SectionHeader";

export const ShopCategoriesContainer = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const { data, isError, isPending, error } = useGetData<CategoryType[]>({
    endpoint: "categories",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  if (data === undefined)
    return ErrorActive({
      error: error,
    });

  return (
    <DashboardLayout sectionClassName="mt-12 lg:mt-24" direction="flex-col">
      <SectionArrowHeader
        title="Shop categories"
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
