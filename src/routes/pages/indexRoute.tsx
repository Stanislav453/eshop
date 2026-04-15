import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { ShopHeroContainer } from "../../components/shopHeroContainer/ShopHeroContainer";
import { ShopCategoriesContainer } from "../../components/shopCategories/ShopCategoriesContainer";
import { OurProductsContainer } from "../../components/ourProducts/OurProductsContainer";
import { OfferBanner } from "../../components/offerBanner/OfferBanner";
import { SpecialOffersContainer } from "../../components/specialOffers/SpecialOffersContainer";
import { BrandContainer } from "../../components/brandLogo/BrandContainer";
import { CustomerReviewsContainer } from "../../components/customerReviews/CustomerReviewsContainer";
import { Newsletter } from "../../components/newsletter/Newsletter";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <main className=" p-2">
        <ShopHeroContainer />
        <ShopCategoriesContainer />
        <OurProductsContainer />
        <OfferBanner />
        <SpecialOffersContainer />
        <BrandContainer />
        <CustomerReviewsContainer />
        <Newsletter />
      </main>
    );
  },
});
