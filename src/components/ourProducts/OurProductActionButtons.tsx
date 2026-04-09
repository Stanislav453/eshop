import { OurProductButton } from "./OurProductButton";
import { CiHeart, CiRead, CiShoppingCart } from "react-icons/ci";

export const OurProductActionButtons = () => {
  return (
    <ul className="flex w-full justify-between border-t">
      <li className="flex-1 w-full ">
        <OurProductButton title="WISHLIST" icon={CiHeart} />
      </li>
      <li className="flex-1 w-full  ">
        <OurProductButton title="ADD TO CART" icon={CiShoppingCart} />
      </li>
      <li className="flex-1 w-full">
        <OurProductButton title="QUICKVIEW" icon={CiRead} />
      </li>
    </ul>
  );
};
