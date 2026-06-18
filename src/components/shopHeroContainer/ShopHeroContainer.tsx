import { SliderContainer } from "./SliderContainer";
import offerBanner from "../../../public/offer-banner.webp"
import { CategoryContainer } from "../shopCategories/CategoryContainer";

const  ShopHeroContainer = () => {
  return (
      <section className="flex flex-wrap lg:flex-nowrap gap-8 w-full pt-4">
        <CategoryContainer />
        <SliderContainer />
        <div className=" w-full lg:w-1/4 h-shop-product-container">
          <img
            className="w-full h-full"
            src={offerBanner}
            alt="Offer Banner"
          />
        </div>

      </section>
  );
};


export default ShopHeroContainer;