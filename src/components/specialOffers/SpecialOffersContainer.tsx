import { useGetData } from "../../hooks/useGetData";
import type { ProductType } from "../../type";
import { offersTime } from "./offersTime";
import { useNow } from "../../hooks/useNow";
import { ErrorActive } from "../common/ErrorActive";
import { ProductsContainer } from "../common/ProductsContainer";
import { ErrorItem } from "../common/ErrorItem";
import { LoadingSpiner } from "../common/LoadingSpiner";
import { CiWarning } from "react-icons/ci";

export const SpecialOffersContainer = () => {
  const now = useNow();

  const { data, isPending, isError, error } = useGetData<ProductType[]>({
    endpoint: "products",
  });

  if (isPending) return <LoadingSpiner />;

  if (isError) return <ErrorActive error={error} />;

  if (data.length === 0)
    return (
      <ErrorItem
        icon={CiWarning}
        color="text-yellow-500"
        message="We have no products yet. Please check back later."
      />
    );

  const specialOffers = data.filter((product) => product.specialOfferEnd > 0);

  return (
    <section>
      <header>
        <h2 className="text-section-title font-bold text-neutral-primary mt-16 mb-4">
          Deal of the day
        </h2>
      </header>
      <ProductsContainer
        data={specialOffers}
        getCountdown={(product) => offersTime(now, product.specialOfferEnd)}
      />
    </section>
  );
};
