import type { ComponentPropsWithRef } from "react";

type CommentType = {
  createdAt: string;
  nickName: string;
  comment: string;
  id: string;
  productId: string;
};

export type FormContainerType = {
  children: React.ReactNode;
  hightText: "Login" | "Register";
};

export type handlerLogInSubmitType = {
  email: string;
  password: string;
};

export enum CategoryOptions {
  DSLRcamera = "DSLR camera",
  Mouse = "Mouse",
  TVscreen = "TV screen",
  Computer = "Computer",
  Pendrive = "Pendrive",
  Headphones = "Headphones",
  Gameboy = "Gameboy",
  Printer = "Printer",
  Radio = "Radio",
}

export type handlerRegisterSubmitType = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
};

export type UserType = {
  id: string;
  firstName: string;
  secondName: string;
  email: string;
  isAdmin: boolean;
};

export type UserStateType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
  logout: () => void;
};

export type PopupStateType = {
  text: string;
  setText: (newText: string) => void;
  closePopup: () => void;
};

export enum FilterSlugOptions {
  DSLRcamera = "dslr-camera",
  Mouse = "mouse",
  TVscreen = "tv-screen",
  Computer = "computer",
  Pendrive = "pendrive",
  Headphones = "headphones",
  Gameboy = "gameboy",
  Printer = "printer",
  Radio = "radio",
}

export type ImgLoadType = {
  key: string;
  height?: "100" | "25";
  location: "category" | "product";
  end: "icon" | "cover";
};

export type ProductType = {
  id: string;
  title: string;
  price: number;
  images: string[];
  rating: number;
  thumbnail: string;
  discount: number;
  specialOfferEnd: number;
  brand: string;
  description: string;
  category: CategoryOptions;
  sku: string;
  availability: boolean;
  comments: CommentType[];
  slug: string;
};

export type CategoryType = {
  id: string;
  name: string;
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
  key: number;
};

export type SkeletonHeight = 100 | 150 | 300 | 325 | 350 | 400 | 700 | 1200;

export type LoadSkeletonProps = {
  placeholdersCount?: number;
  skeletonHeight: SkeletonHeight;
};

export type RenderOnViewportEntryProps = {
  minHeight: SkeletonHeight;
  children: React.ReactNode;
  suspenseActive: boolean;
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  placeholderCount?: number;
} & React.HTMLAttributes<HTMLDivElement>;

type EndpointOptions = "categories" | "products" | "customerReviews";

export type UseGetDataType = {
  endpoint: EndpointOptions;
};

export type UseDeleteDataType = {
  endpoint: EndpointOptions;
};

export type FilterValue = FilterSlugOptions;

export type UseFilterDataType = {
  filterValue: FilterSlugOptions;
};

export type FilterCategoryType = {
  title: CategoryOptions;
  slug: FilterSlugOptions;
};

export type CreateImageUrlType = {
  url: string;
  height: 400 | 130;
};

export type ProductsViewType = {
  id: string;
  thumbnail: string;
  title: string;
  price: number;
  discount: number;
  rating: number;
  category: string;
  discountedPrice: number;
  priceStyle: string;
  hoverImage: string;
  countdown: { d: number; h: string; m: string; s: string } | null;
};

export type CustomerReviewType = {
  id: string;
  userName: string;
  rating: number;
  comment: string;
};
