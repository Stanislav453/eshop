import type { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import type { UsePrevNextButtonsType } from "../../type";

const getButtonsState = (emblaApi?: EmblaCarouselType) => {
  if (!emblaApi) {
    return {
      prevBtnDisabled: true,
      nextBtnDisabled: true,
    };
  }

  return {
    prevBtnDisabled: !emblaApi.canGoToPrev(),
    nextBtnDisabled: !emblaApi.canGoToNext(),
  };
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [buttonsState, setButtonsState] = useState(() =>
    getButtonsState(emblaApi),
  );

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.goToPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.goToNext();
  }, [emblaApi]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setButtonsState(getButtonsState(api));
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("reinit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reinit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    setButtonsState(getButtonsState(emblaApi));
  }, [emblaApi]);

  return {
    prevBtnDisabled: buttonsState.prevBtnDisabled,
    nextBtnDisabled: buttonsState.nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
