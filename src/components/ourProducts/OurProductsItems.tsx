import type { ProductType } from "../../type";
import { LoadingSpiner } from "../common/LoadingSpiner";
import { OurProductsItemView } from "./OurProductsItemView";

type OurProductsItemsType = {
  data: ProductType[];
  isPending: boolean;
};

export const OurProductsItems = ({ data, isPending }: OurProductsItemsType) => {
  if (isPending) {
    return <LoadingSpiner />;
  }

  return (
    <ul className="grid grid-cols-4 gap-8">
      {data.map((product: ProductType) => {
        const {
          id,
          title,
          price,
          discount,
          thumbnail,
          rating,
          category,
          images,
        } = product;

        const discountedPrice = price - discount;
        const priceStyle =
          discount > 0
            ? "line-through text-gray-500 font-semibold pl-2"
            : "font-semibold";

        return (
          <OurProductsItemView
            id={id}
            thumbnail={thumbnail}
            title={title}
            price={price}
            discount={discount}
            rating={rating}
            category={category}
            hoverImage={images[1]}
            discountedPrice={discountedPrice}
            priceStyle={priceStyle}
          />
        );
      })}
    </ul>
  );
};
