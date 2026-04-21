import { useState } from "react";
import {
  FilterSlugOptions,
  type FilterValue,
  type ProductType,
} from "../../type";
import { useFilterData } from "../../hooks/useFilterData";
import { ErrorActive } from "../common/ErrorActive";
import { OurProductsCategory } from "./OurProductsCategory";
import { ProductsContainer } from "../common/ProductsContainer";

export const OurProductsContainer = () => {
  const [slug, setSlug] = useState<FilterValue>(FilterSlugOptions.DSLRcamera);

  const { data, isError, isPending, error } = useFilterData<ProductType[]>({
    filterValue: slug,
  });

  if (isError || data === undefined)
    return ErrorActive({
      error: error,
    });

  return (
    <section>
      <h2 className="text-section-title font-bold text-neutral-primary">
        Our products
      </h2>
      <OurProductsCategory setSlug={setSlug} />
      <ProductsContainer data={data} isPending={isPending} />
    </section>
  );
};
