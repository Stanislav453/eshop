import { useGetData } from "../../hooks/useGetData";
import type { ProductType } from "../../type";
import { ErrorActive } from "../common/ErrorActive";
import { ErrorItem } from "../common/ErrorItem";
import { CiWarning } from "react-icons/ci";
import { PmItemView } from "./PmItemView";
import { Gallery } from "../common/Gallery";
import { PmDelUpButtons } from "./PmDelUpButtons";

export const ProductManagerContainer = () => {
  const { data, isPending, isError, error } = useGetData<ProductType[]>({
    endpoint: "products",
  });

  if (isPending) return <div>Loading...</div>;

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
    <div className="m-4">
      <h2 className="text-2xl font-bold text-center py-3">Product Manager</h2>
      <ul className="flex flex-col gap-2 bg-blue-300 p-2">
        {data.map((product) => {
          const {
            id,
            title,
            price,
            images,
            thumbnail,
            discount,
            specialOfferEnd,
            brand,
            description,
            category,
            sku,
            availability,
            slug,
            rating,
          } = product;
          return (
            <li
              key={product.id}
              className="flex gap-4 bg-blue-200 transition-all p-2"
            >
              <div className="w-[20px] flex-none">
                <span className="font-bold">Id:</span> {id}
              </div>
              <div className="w-[200px] flex-none">
                <PmItemView desc="Title" title={title} />
                <div className=" w-full h-full">
                  <img
                    className="w-[200px] h-[200px] object-contain"
                    src={thumbnail}
                    alt={title}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-none w-[250px]">
                <PmItemView desc="Price" title={price} />
                <PmItemView desc="Title" title={title} />
                <PmItemView desc="Category" title={category} />
                <PmItemView desc="Discount" title={discount} />
                <PmItemView desc="Special Offer End" title={specialOfferEnd} />
                <PmItemView desc="Brand" title={brand} />

                <PmItemView desc="SKU" title={sku} />
                <PmItemView desc="Availability" title={availability} />
                <PmItemView desc="Slug" title={slug} />
                <PmItemView desc="Rating" title={rating} />
              </div>
              <div>
                <PmItemView desc="Description" title={description} />
                <div className="mt-4">
                  <h5 className="font-bold">Preview images:</h5>
                  <ul className="flex gap-2 flex-wrap">
                    <Gallery images={images} />
                  </ul>
                </div>
              </div>
              <PmDelUpButtons id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
