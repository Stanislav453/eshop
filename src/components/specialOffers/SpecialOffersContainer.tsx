import { useGetData } from "../../hooks/useGetData";
import type { ProductType } from "../../type";
import { DashboardLayout } from "../common/DashboardLayout";
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

  const specialOffers = data.filter((product) => product.specialOfferStart > 0);

  return (
    <DashboardLayout
      direction="flex-col"
      childrenClassName="items-center gap-4"
    >
      <ProductsContainer
        data={specialOffers}
        isPending={isPending}
        getCountdown={(product) =>
          offersTime(now, product.specialOfferStart, product.specialOfferEnd)
        }
      />
    </DashboardLayout>
  );
};
