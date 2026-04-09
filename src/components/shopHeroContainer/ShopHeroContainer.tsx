import { DashboardLayout } from "../common/DashboardLayout";
import { CategoryView } from "../shopCategories/CategoryView";
import { SliderContainer } from "./SliderContainer";

export const ShopHeroContainer = () => {
  return (
    <DashboardLayout direction="flex-row">
      <div className="flex gap-8 w-full pt-4">
        <CategoryView />
        <SliderContainer />
        <div className="flex-initial w-1/4 h-shop-product-container">
          <img
            className="w-full h-full"
            src="../../public/offer-banner.webp"
            alt="Offer Banner"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};
