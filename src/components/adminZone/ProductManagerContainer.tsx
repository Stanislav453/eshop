import { useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import type { ProductType } from "../../type";
import { ErrorActive } from "../common/ErrorActive";
import { ErrorItem } from "../common/ErrorItem";
import { CiWarning } from "react-icons/ci";
import { PmItemView } from "./PmItemView";
import { Gallery } from "../common/Gallery";
import { PmDelUpButtons } from "./PmDelUpButtons";
import { PmEditForm } from "./PmEditForm";
import { CreateProductContainer } from "./CreateProductContainer";

export const ProductManagerContainer = () => {
  const { data, isPending, isError, error } = useGetData<ProductType[]>({
    endpoint: "products",
  });
  const [editingId, setEditingId] = useState<string | null>(null);

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
      <CreateProductContainer />
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
          const isEditing = editingId === id;
          return (
            <li
              key={product.id}
              className="flex gap-4 items-start bg-blue-200 transition-all p-2"
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
                <div className="mt-4">
                  <h5 className="font-bold">Preview images:</h5>
                  <Gallery images={images} />
                </div>
              </div>
              {isEditing ? (
                <PmEditForm
                  product={product}
                  onCancel={() => setEditingId(null)}
                  onSaved={() => setEditingId(null)}
                />
              ) : (
                <>
                  <div className="flex flex-col gap-2 flex-none w-[250px]">
                    <PmItemView desc="Price" title={price} />
                    <PmItemView desc="Title" title={title} />
                    <PmItemView desc="Category" title={category} />
                    <PmItemView desc="Discount" title={discount} />
                    <PmItemView
                      desc="Special Offer End"
                      title={specialOfferEnd}
                    />
                    <PmItemView desc="Brand" title={brand} />

                    <PmItemView desc="SKU" title={sku} />
                    <PmItemView desc="Availability" title={availability} />
                    <PmItemView desc="Slug" title={slug} />
                    <PmItemView desc="Rating" title={rating} />
                  </div>
                  <div>
                    <PmItemView desc="Description" title={description} />
                  </div>
                  <PmDelUpButtons id={id} onEdit={() => setEditingId(id)} />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
