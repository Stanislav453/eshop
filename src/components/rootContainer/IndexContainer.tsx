import { ShopHeroContainer } from "../shopHeroContainer/ShopHeroContainer";
import { ShopCategoriesContainer } from "../shopCategories/ShopCategoriesContainer";
import { OurProductsContainer } from "../ourProducts/OurProductsContainer";
import { OfferBanner } from "../offerBanner/OfferBanner";
import { SpecialOffersContainer } from "../specialOffers/SpecialOffersContainer";
import { BrandContainer } from "../brandLogo/BrandContainer";
import { CustomerReviewsContainer } from "../customerReviews/CustomerReviewsContainer";
import { Newsletter } from "../newsletter/Newsletter";
import { ServiceContainer } from "../service/ServiceContainer";

export const IndexContainer = () => {
  return (
    <>
      <ShopHeroContainer />
      <ShopCategoriesContainer />
      <OurProductsContainer />
      <OfferBanner />
      <SpecialOffersContainer />
      <BrandContainer />
      <CustomerReviewsContainer />
      <Newsletter />
      <ServiceContainer />
    </>
  );
};
