import { DashboardLayout } from "../common/DashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { CategoryView } from "../shopCategories/CategoryView";
import { SliderContainer } from "./SliderContainer";

export const ShopHeroContainer = () => {
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://696cdbeff4a79b31517ff504.mockapi.io/categories").then(
        (res) => res.json(),
      ),
  });

  if (!data) return null;

  return (
    <DashboardLayout>
      <div className="flex gap-8 w-full pt-4">
        <CategoryView data={data} />
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
