import { useGetData } from "../../hooks/useGetData";
import type { CustomerReviewType } from "../../type";
import { DashboardLayout } from "../common/DashboardLayout";
import { ErrorActive } from "../common/ErrorActive";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "../../hooks/usePrevNextButtons";
import { SectionArrowHeader } from "../shopCategories/SectionHeader";
import { CustomerReviews } from "./CustomerReviews";

export const CustomerReviewsContainer = () => {
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

  if (data === undefined) {
    return ErrorActive({
      error: error,
    });
  }

  return (
    <DashboardLayout sectionClassName="mt-14" direction="flex-col">
      <SectionArrowHeader
        title="Customer review"
        onPrevButtonClick={onPrevButtonClick}
        onNextButtonClick={onNextButtonClick}
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
      />
      <CustomerReviews
        data={data}
        emblaRef={emblaRef}
        error={error}
        isPending={isPending}
        isError={isError}
      />
    </DashboardLayout>
  );
};
