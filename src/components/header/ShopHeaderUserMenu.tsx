import { Link } from "@tanstack/react-router";
import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useUser } from "../../store/useUser";
import { useWishlist } from "../../store/useWishlist";
import { UserMenu } from "./UserMenu";

type ShopHeaderUserMenuProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export const ShopHeaderUserMenu = ({ setIsOpen }: ShopHeaderUserMenuProps) => {
  const user = useUser((state) => state.user);
  const wishlistCount = useWishlist((state) => state.wishlist.length);

  return (
    <div>
      <div className="flex gap-4 lg:gap-8 items-center">
        <button onClick={() => setIsOpen(true)}>
          <RxHamburgerMenu className="block lg:hidden text-[1.3rem]" />
        </button>
        <button>
          <CiSearch className="text-[1.3rem]" />
        </button>
        {user ? (
          <UserMenu user={user} />
        ) : (
          <Link to="/login" className="flex items-center">
            <CiUser className="text-[1.3rem]" />
          </Link>
        )}
        <Link to="/wishlist" className="relative flex items-center">
          <CiHeart className="text-[1.3rem]" />
          {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[16px] h-[16px] px-1 rounded-full bg-button-brand-primary text-[0.65rem] leading-none text-neutral-tertiary">
              {wishlistCount}
            </span>
          )}
        </Link>
        <button>
          <CiShoppingBasket className="text-[1.3rem]" />
        </button>
      </div>
    </div>
  );
};
