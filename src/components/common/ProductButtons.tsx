import { ProductButtonView } from "./ProductButtonView";
import { CiHeart, CiRead, CiShoppingCart } from "react-icons/ci";

type ProductButtonsProps = {
  saveProductDetail: () => void;
};

export const ProductButtons = ({ saveProductDetail }: ProductButtonsProps) => {
  return (
    <ul className="flex w-full justify-between border-t">
      <li className="flex-1 w-full ">
        <ProductButtonView title="WISHLIST" icon={CiHeart} />
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
