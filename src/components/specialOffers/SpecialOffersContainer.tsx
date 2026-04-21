import { useGetData } from "../../hooks/useGetData";
import type { ProductType } from "../../type";
import { offersTime } from "./offersTime";
import { useNow } from "../../hooks/useNow";
import { ErrorActive } from "../common/ErrorActive";
import { ProductsContainer } from "../common/ProductsContainer";

export const SpecialOffersContainer = () => {
  const now = useNow();

  const { data, isPending, error } = useGetData<ProductType[]>({
    endpoint: "products",
  });

  if (data === undefined)
    return ErrorActive({
      error: error,
    });

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
        isPending={isPending}
        getCountdown={(product) => offersTime(now, product.specialOfferEnd)}
      />
    </section>
  );
};
