import { DashboardLayout } from "../common/DashboardLayout";
import offerBanner from "../../../public/offer-banner-second.webp";

export const OfferBanner = () => {
  return (
    <DashboardLayout direction="flex-col">
      <a href="#">
        <img src={offerBanner} alt="Offer Banner" />
      </a>
    </DashboardLayout>
  );
};
