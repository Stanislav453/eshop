import useEmblaCarousel from "embla-carousel-react";
import { DashboardLayout } from "../common/DashboardLayout";
import { ImageCarousel } from "./ImageCarousel";
import { usePrevNextButtons } from "../../hooks/usePrevNextButtons";
import { useQuery } from "@tanstack/react-query";
import { AdvertisingBannersContainer } from "./AdvertisingBannersContainer";
import { ShopCategoriesHeader } from "./ShopCategoriesHeader";

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
    <DashboardLayout className="mt-24" direction="flex-col">
      <ShopCategoriesHeader
        onPrevButtonClick={onPrevButtonClick}
        onNextButtonClick={onNextButtonClick}
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
      />
      <ImageCarousel data={data} emblaRef={emblaRef} />
      <AdvertisingBannersContainer />
    </DashboardLayout>
  );
};
