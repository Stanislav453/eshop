import { CategoryView } from "../shopCategories/CategoryView";
import { SliderContainer } from "./SliderContainer";

export const ShopHeroContainer = () => {
  return (
      <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full pt-4">
        <CategoryView />
        <SliderContainer />
        <div className=" w-full lg:w-1/4 h-shop-product-container">
          <img
            className="w-full h-full"
            src="../../public/offer-banner.webp"
            alt="Offer Banner"
          />
        </div>

      </div>
  );
};
