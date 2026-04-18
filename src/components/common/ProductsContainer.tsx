import type { ProductType } from "../../type";
import { LoadingSpiner } from "./LoadingSpiner";
import { ProductsView } from "./ProductsView";

type ProductsContainerType = {
  data: ProductType[];
  isPending: boolean;
  getCountdown?: (
    product: ProductType,
  ) => { d: number; h: string; m: string; s: string } | null;
};

export const ProductsContainer = ({
  data,
  isPending,
  getCountdown,
}: ProductsContainerType) => {
  if (isPending) {
    return <LoadingSpiner />;
  }

  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        const countdown = getCountdown ? getCountdown(product) : null;

        const discountedPrice = price - discount;
        const priceStyle =
          discount > 0
            ? "line-through text-gray-500 font-semibold pl-2"
            : "font-semibold";

        return (
          <ProductsView
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
            countdown={countdown}
          />
        );
      })}
    </ul>
  );
};
