import { NextButtonView } from "./NextButtonView";
import { PrevButtonView } from "./PrevButtonView";

type SectionArrowHeaderType = {
  title: string;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
};

export const SectionArrowHeader = ({
  title,
  onPrevButtonClick,
  onNextButtonClick,
  prevBtnDisabled,
  nextBtnDisabled,
}: SectionArrowHeaderType) => {
  return (
    <header className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-8">
      <h2 className="text-section-title font-bold text-neutral-primary">
        {title}
      </h2>
      <div className="flex items-center">
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
    </header>
  );
};
