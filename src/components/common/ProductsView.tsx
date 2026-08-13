import type { ProductsViewType } from "../../type";
import { createImageUrl } from "../../utils/createImageUrl";
import { ProductButtons } from "./ProductButtons";
import { RatingContainer } from "../ourProducts/RatingContainer";
import { CountDown } from "../specialOffers/CountDown";

export const ProductsView = ({
  id,
  thumbnail,
  title,
  price,
  discount,
  rating,
  category,
  discountedPrice,
  priceStyle,
  hoverImage,
  countdown,
}: ProductsViewType) => {
  return (
    <li className="w-full border" key={id}>
      <div className="flex items-center flex-col py-8 group">
        <a
          className="relative w-our-product-img-container h-our-product-img-container cursor-pointer "
          href="#"
        >
          <img
            className="absolute inset-0 w-full h-full object-contain 
               opacity-100 group-hover:opacity-0 
               transition-opacity duration-500"
            src={createImageUrl({
              url: thumbnail,
              height: 400,
            })}
            alt={title}
          />
          <img
            className="absolute inset-0 w-full h-full object-contain 
               opacity-0 group-hover:opacity-100 
               transition-opacity duration-500"
            src={createImageUrl({
              url: hoverImage,
              height: 400,
            })}
            alt={title}
          />
        </a>
        <div className="w-full flex flex-col items-center py-5">
          {countdown && <CountDown countdown={countdown} />}
          <RatingContainer rating={rating} justifyContent={"justify-center"} />
          <p className="uppercase text-sm text-paragraph-primary pt-1">
            {category}
          </p>
          <a
            className="block font-semibold truncate max-w-[150px] pt-1 text-center  hover:text-primary-hover cursor-pointer transition-colors duration-300"
            href="#"
          >
            {title}
          </a>
          <p className="pt-1">
            {discount > 0 && (
              <span className="font-semibold">
                {discountedPrice.toFixed(2)}$
              </span>
            )}
            <span className={priceStyle}>{price.toFixed(2)}$</span>
          </p>
        </div>
      </div>
      <ProductButtons  />
    </li>
  );
};
