import useEmblaCarousel from "embla-carousel-react";
import { ImageCarousel } from "./ImageCarousel";
import { usePrevNextButtons } from "../../hooks/usePrevNextButtons";
import { useGetData } from "../../hooks/useGetData";
import type { CategoryType } from "../../type";
import { SectionArrowHeader } from "./SectionHeader";
import { ErrorActive } from "../common/ErrorActive";
import { ErrorItem } from "../common/ErrorItem";
import { CiWarning } from "react-icons/ci";
import { Skeleton } from "../common/Skeleton.tsx/Skeleton";

 const ShopCategoriesContent   = () => {
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

  if (isPending) return <Skeleton placeholdersCount={5} skeletonHeight={400} />;

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
    <>
      <SectionArrowHeader
        title="Shop categories"
        onPrevButtonClick={onPrevButtonClick}
        onNextButtonClick={onNextButtonClick}
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
      />
      <ImageCarousel data={data} emblaRef={emblaRef} />
    </>
  );
};

export default ShopCategoriesContent;
