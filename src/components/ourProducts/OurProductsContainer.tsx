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
import { CiWarning } from "react-icons/ci";
import { ErrorItem } from "../common/ErrorItem";
import { Skeleton } from "../common/Skeleton.tsx/Skeleton";


const OurProductsContainer = () => {
  const [slug, setSlug] = useState<FilterValue>(FilterSlugOptions.DSLRcamera);

  const { data, isError, isPending, error } = useFilterData<ProductType[]>({
    filterValue: slug,
  });

  if (isPending) return <Skeleton placeholdersCount={5} skeletonHeight={400} />;

  if (isError) return <ErrorActive error={error} />;

  if (data.length === 0)
    return (
      <ErrorItem
        icon={CiWarning}
        color="text-yellow-500"
        message="We have no products yet. Please check back later."
      />
    );

  return (
    <>
      <h2 className="text-section-title font-bold text-neutral-primary">
        Our products
      </h2>
      <OurProductsCategory setSlug={setSlug} />
      <ProductsContainer data={data} />
    </>
  );
};
  
export default OurProductsContainer;