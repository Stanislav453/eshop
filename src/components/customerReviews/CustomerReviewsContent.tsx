import { useGetData } from "../../hooks/useGetData";
import type { CustomerReviewType } from "../../type";
import { ErrorActive } from "../common/ErrorActive";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "../../hooks/usePrevNextButtons";
import { SectionArrowHeader } from "../shopCategories/SectionHeader";
import { CustomerReviews } from "./CustomerReviews";
import { ErrorItem } from "../common/ErrorItem";
import { CiWarning } from "react-icons/ci";
import { Skeleton } from "../common/Skeleton.tsx/Skeleton";

const CustomerReviewsContent = () => {
  const { data, isPending, error, isError } = useGetData<CustomerReviewType[]>({
    endpoint: "customerReviews",
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
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
        title="Customer review"
        onPrevButtonClick={onPrevButtonClick}
        onNextButtonClick={onNextButtonClick}
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
      />
      <CustomerReviews data={data} emblaRef={emblaRef} />
    </>
  );
};

export default CustomerReviewsContent;
