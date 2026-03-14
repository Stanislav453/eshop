import type { ComponentPropsWithRef } from "react";

export type ImgLoadType = {
  key: string;
  height?: "100" | "25";
  location: "category" | "product";
  end: "icon" | "cover";
};

export type CategoryType = {
  id: string;
  name: string;
  iconId: string;
  bgId: string;
};

export type PropType = ComponentPropsWithRef<"button">;

export type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export type BuildImageUrlType = {
  imageId: string;
  options?: { height: 25 | 50 | 90 | 130 | 150 };
};

export type AdvertisingBannersType = {
  text: string;
  src: string;
};
