import { lazy } from "react";
import ShopHeroContainer from "../shopHeroContainer/ShopHeroContainer";
import ShopCategoriesContainer from "../shopCategories/ShopCategoriesContainer";
import OurProductsContainer from "../ourProducts/OurProductsContainer";
import SpecialOffersContainer from "../specialOffers/SpecialOffersContainer";
import CustomerReviewsContainer from "../customerReviews/CustomerReviewsContainer";
import RenderOnViewportEntry from "../common/renderOnViewportEntry/RenderOnViewportEntry";

const AdvertisingBannersContainer = lazy(
  () => import("../shopCategories/AdvertisingBannersContainer"),
);
const OfferBanner = lazy(() => import("../offerBanner/OfferBanner"));
const BrandContainer = lazy(() => import("../brandLogo/BrandContainer"));
const Newsletter = lazy(() => import("../newsletter/Newsletter"));
const ServiceContainer = lazy(() => import("../service/ServiceContainer"));

export const IndexContainer = () => {
  return (
    <>
      <ShopHeroContainer />
      <RenderOnViewportEntry minHeight={325} suspenseActive={false}>
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
      <RenderOnViewportEntry minHeight={300} suspenseActive={false}>
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
