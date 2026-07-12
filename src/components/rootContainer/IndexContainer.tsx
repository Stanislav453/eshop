import { ShopHeroContainer } from "../shopHeroContainer/ShopHeroContainer";
import { ShopCategoriesContainer } from "../shopCategories/ShopCategoriesContainer";
import { OurProductsContainer } from "../ourProducts/OurProductsContainer";
import { SpecialOffersContainer } from "../specialOffers/SpecialOffersContainer";
import { CustomerReviewsContainer } from "../customerReviews/CustomerReviewsContainer";
import { AdvertisingBannersContainer } from "../shopCategories/AdvertisingBannersContainer";
import { OfferBannerContainer } from "../offerBanner/OfferBannerContainer";
import { BrandContainer } from "../brandLogo/brand/BrandContainer";
import { NewsletterContainer } from "../newsletter/NewsletterContainer";
import { ServiceContainer } from "../service/ServiceContainer";

export const IndexContainer = () => {
  return (
    <>
      <ShopHeroContainer />
      <ShopCategoriesContainer />
      <AdvertisingBannersContainer />
      <OurProductsContainer />
      <OfferBannerContainer />
      <SpecialOffersContainer />
      <BrandContainer />
      <CustomerReviewsContainer />
      <NewsletterContainer />
      <ServiceContainer />
    </>
  );
};
