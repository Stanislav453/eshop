import type { ProductsViewType } from "../../type";
import { createImageUrl } from "../../utils/createImageUrl";
import { OurProductActionButtons } from "../ourProducts/OurProductActionButtons";
import { RatingContainer } from "../ourProducts/RatingContainer";

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
          {countdown && (
            <ul className="w-full flex justify-between px-6 mb-6">
              <li className="flex flex-col items-center justify-center p-3 bg-box-brand-color border ">
                <span className="font-bold text-xl text-center">{countdown.d}</span>
                <span className="text-sm text-paragraph-primary">DAY</span>
              </li>
              <li className="flex flex-col p-3 bg-box-brand-color border ">
                <span className="font-bold text-xl text-center">{countdown.h}</span>
                <span className="text-sm text-paragraph-primary">HOUR</span>
              </li>
              <li className="flex flex-col p-3 bg-box-brand-color border ">
                <span className="font-bold text-xl">{countdown.m}</span>
                <span className="text-sm text-paragraph-primary">MIN</span>
              </li>
              <li className="flex flex-col p-3 bg-box-brand-color border ">
                <span className="font-bold text-xl">{countdown.s}</span>
                <span className="text-sm text-paragraph-primary">SEC</span>
              </li>
            </ul>
          )}

          <RatingContainer rating={rating} />
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
      <OurProductActionButtons />
    </li>
  );
};
