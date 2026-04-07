import { createImageUrl } from "../../utils/createImageUrl";
import type { ProductType } from "../../type";
import { LoadingSpiner } from "../common/LoadingSpiner";
import { CiHeart, CiRead, CiShoppingCart } from "react-icons/ci";
import { RatingContainer } from "./RatingContainer";

type OurProductsItemsType = {
  data: ProductType[];
  isPending?: boolean;
};

const OurProductsItems = ({ data, isPending }: OurProductsItemsType) => {
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
                    url: images[1],
                    height: 400,
                  })}
                  alt={title}
                />
              </a>
              <div className="py-5 text-center">
                <RatingContainer rating={rating} />
                <p className="uppercase text-sm text-paragraph-primary pt-1">
                  {category}
                </p>
                <a
                  className="block font-semibold truncate max-w-[150px] pt-1  hover:text-primary-hover cursor-pointer transition-colors duration-300"
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
            <ul className="flex w-full justify-between border-t">
              <li className="flex-1 w-full ">
                <button
                  title="WISHLIST"
                  className=" w-full flex justify-center  py-4 hover:bg-gradient-to-r from-blue-600 to-red-600 group  transition-all duration-500
                  relative  after:content-[attr(title)]
    after:absolute after:bottom-[3.7rem] after:left-3
    after:bg-black after:text-white after:text-sm
    after:px-2 after:py-1 after:rounded
    after:opacity-0 hover:after:opacity-100
    after:transition-opacity after:text-[.7rem]
                "
                >
                  <CiHeart className="w-full block text-2xl text-neutral-secondary  group-hover:text-neutral-tertiary transition-all duration-100" />
                </button>
              </li>
              <li className="flex-1 w-full  ">
                <button
                  title="ADD TO CART"
                  className=" w-full flex justify-center  py-4 hover:bg-gradient-to-r from-blue-600 to-red-600 group  transition-all duration-500 border-l border-r
                                  relative  after:content-[attr(title)]
    after:absolute after:bottom-[3.7rem] after:left-1
    after:bg-black after:text-white after:text-sm
    after:px-2 after:py-1 after:rounded
    after:opacity-0 hover:after:opacity-100
    after:transition-opacity after:text-[.7rem]"
                >
                  <CiShoppingCart className="w-full block text-2xl text-neutral-secondary  group-hover:text-neutral-tertiary transition-all duration-100" />
                </button>
              </li>
              <li className="flex-1 w-full">
                <button
                  title="QUICKVIEW"
                  className=" w-full flex justify-center  py-4 hover:bg-gradient-to-r from-blue-600 to-red-600 group  transition-all duration-500                                     relative  after:content-[attr(title)]
    after:absolute after:bottom-[3.7rem] after:left-2
    after:bg-black after:text-white after:text-sm
    after:px-2 after:py-1 after:rounded
    after:opacity-0 hover:after:opacity-100
    after:transition-opacity after:text-[.7rem]"
                >
                  <CiRead className="w-full block text-2xl text-neutral-secondary  group-hover:text-neutral-tertiary transition-all duration-100" />
                </button>
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default OurProductsItems;
