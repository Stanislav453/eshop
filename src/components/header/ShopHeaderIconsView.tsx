import { Link } from "@tanstack/react-router";
import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

type ShopHeaderIconsViewProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export const ShopHeaderIconsView = ({
  setIsOpen,
}: ShopHeaderIconsViewProps) => {
  return (
    <div>
      <div className="flex gap-4 lg:gap-8">
        <button onClick={() => setIsOpen(true)}>
          <RxHamburgerMenu className="block lg:hidden text-[1.3rem]" />
        </button>
        <button>
          <CiSearch className="text-[1.3rem]" />
        </button>
        <Link to="/login" className="flex items-center">
          <CiUser className="text-[1.3rem]" />
        </Link>
        <Link to="/" className="flex items-center">
          <CiHeart className="text-[1.3rem]" />
        </Link>
        <button>
          <CiShoppingBasket className="text-[1.3rem]" />
        </button>
      </div>
    </div>
  );
};
