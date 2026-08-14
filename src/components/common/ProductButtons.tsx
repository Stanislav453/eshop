import { ProductButtonView } from "./ProductButtonView";
import { CiHeart, CiRead, CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

type ProductButtonsProps = {
  saveProductDetail: () => void;
  isLiked: boolean;
  onToggleWishlist: () => void;
};

export const ProductButtons = ({
  saveProductDetail,
  isLiked,
  onToggleWishlist,
}: ProductButtonsProps) => {
  return (
    <ul className="flex w-full justify-between border-t">
      <li className="flex-1 w-full ">
        <ProductButtonView
          onClick={onToggleWishlist}
          title="WISHLIST"
          icon={isLiked ? FaHeart : CiHeart}
          active={isLiked}
        />
      </li>
      <li className="flex-1 w-full  border-x">
        <ProductButtonView title="ADD TO CART" icon={CiShoppingCart} />
      </li>
      <li className="flex-1 w-full">
        <ProductButtonView
          onClick={() => saveProductDetail()}
          title="QUICKVIEW"
          icon={CiRead}
        />
      </li>
    </ul>
  );
};
