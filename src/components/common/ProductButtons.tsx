import { useState } from "react";
import { DetailProduct } from "../detailProduct/DetailProduct";
import { ProductButtonView } from "./ProductButtonView";
import { CiHeart, CiRead, CiShoppingCart } from "react-icons/ci";

export const ProductButtons = () => {
  const[isOpen, setIsOpen] = useState(false);


  return (

    <>

    <ul className="flex w-full justify-between border-t">
      <li className="flex-1 w-full ">
        <ProductButtonView title="WISHLIST" icon={CiHeart} />
      </li>
      <li className="flex-1 w-full  border-x">
        <ProductButtonView title="ADD TO CART" icon={CiShoppingCart} />
      </li>
      <li className="flex-1 w-full">
        <ProductButtonView onClick={() => setIsOpen(true)}  title="QUICKVIEW" icon={CiRead} />
      </li>
    </ul>

    <DetailProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
