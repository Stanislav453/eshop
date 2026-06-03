import useEmblaCarousel from "embla-carousel-react";
import { ImageCarousel } from "./ImageCarousel";
import { usePrevNextButtons } from "../../hooks/usePrevNextButtons";
import { AdvertisingBannersContainer } from "./AdvertisingBannersContainer";
import { useGetData } from "../../hooks/useGetData";
import type { CategoryType } from "../../type";
import { SectionArrowHeader } from "./SectionHeader";
import { LoadingSpiner } from "../common/LoadingSpiner";
import { ErrorActive } from "../common/ErrorActive";
import { ErrorItem } from "../common/ErrorItem";
import { CiWarning } from "react-icons/ci";

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

  if (isPending) return <LoadingSpiner />;

  if (isError) return <ErrorActive error={error} />;

  if (data.length === 0)
    
    return (
      <ErrorItem
        icon={CiWarning}
        color="text-yellow-500"
        message="We have no products yet. Please check back later."
      />
    );

  return (
    <section>
      <SectionArrowHeader
        title="Shop categories"
        onPrevButtonClick={onPrevButtonClick}
        onNextButtonClick={onNextButtonClick}
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
      />
      <ImageCarousel data={data} emblaRef={emblaRef} />
      <AdvertisingBannersContainer />
    </section>
  );
};
