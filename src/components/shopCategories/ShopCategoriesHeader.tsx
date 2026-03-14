import { NextButtonView } from "./NextButtonView";
import { PrevButtonView } from "./PrewButtonView";

type ShopCategoriesHeaderType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
};

export const ShopCategoriesHeader = ({
  onPrevButtonClick,
  onNextButtonClick,
  prevBtnDisabled,
  nextBtnDisabled,
}: ShopCategoriesHeaderType) => {
  return (
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
  );
};
