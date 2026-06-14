import ShopHeroContainer from "../shopHeroContainer/ShopHeroContainer";
import ShopCategoriesContainer from "../shopCategories/ShopCategoriesContainer";
import OurProductsContainer from "../ourProducts/OurProductsContainer";
import OfferBanner from "../offerBanner/OfferBanner";
import SpecialOffersContainer from "../specialOffers/SpecialOffersContainer";
import BrandContainer from "../brandLogo/BrandContainer";
import CustomerReviewsContainer from "../customerReviews/CustomerReviewsContainer";
import Newsletter from "../newsletter/Newsletter";
import ServiceContainer from "../service/ServiceContainer";
import RenderOnViewportEntry from "../common/renderOnViewportEntry/RenderOnViewportEntry";
import { AdvertisingBannersContainer } from "../shopCategories/AdvertisingBannersContainer";

export const IndexContainer = () => {
  return (
    <>
      <ShopHeroContainer />
      <RenderOnViewportEntry
        placeholderCount={5}
        minHeight={325}
        suspenseActive={false}
      >
        <ShopCategoriesContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry
        minHeight={700}
        suspenseActive={true}
        placeholderCount={3}
      >
        <AdvertisingBannersContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry minHeight={400} suspenseActive={false}>
        <OurProductsContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry
        placeholderCount={1}
        minHeight={350}
        suspenseActive={true}
      >
        <OfferBanner />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry minHeight={1200} suspenseActive={false}>
        <SpecialOffersContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry
        placeholderCount={8}
        minHeight={150}
        suspenseActive={true}
      >
        <BrandContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry
        minHeight={300}
        suspenseActive={true}
      >
        <CustomerReviewsContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry
        placeholderCount={1}
        minHeight={150}
        suspenseActive={true}
      >
        <Newsletter />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry
        placeholderCount={3}
        minHeight={100}
        suspenseActive={true}
      >
        <ServiceContainer />
      </RenderOnViewportEntry>
    </>
  );
};
