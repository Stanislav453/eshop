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

export const IndexContainer = () => {
  return (
    <>
      <ShopHeroContainer />
      <RenderOnViewportEntry>
        <ShopCategoriesContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry>
        <OurProductsContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry>
        <OfferBanner />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry>
        <SpecialOffersContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry>
        <BrandContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry>
        <CustomerReviewsContainer />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry>
        <Newsletter />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry>
        <ServiceContainer />
      </RenderOnViewportEntry>
    </>
  );
};
