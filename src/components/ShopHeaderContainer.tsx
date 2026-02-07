import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";
import { Link } from "@tanstack/react-router";
import { DashboardLayout } from "./DashboardLayout";

export const ShopHeaderContainer = () => {
  return (
    <DashboardLayout>
      <div className="flex">
        <input
          type="search"
          name="search"
          placeholder="Find our search"
          aria-label="search"
          required
          autoComplete="off"
          className="p-4 border"
        />
        <button className="flex justify-center items-center w-[50px] h-full text-[1rem] text-neutral-tertiary bg-button-brand-primary cursor-pointer hover:bg-button-brand-primary-hover transition-colors duration-300">
          <CiSearch className="text-[1.5rem]" />
        </button>
      </div>
      <button className="w-[106px]">
        <img src="../../public/elesaLogo.webp" alt="elesa_logo" />
      </button>
      <div className="flex gap-8">
        <button>
          <CiSearch className="text-[1.3rem]" />
        </button>
        <Link to="/" className="flex items-center">
          <CiUser className="text-[1.3rem]" />
        </Link>
        <Link to="/" className="flex items-center">
          <CiHeart className="text-[1.3rem]" />
        </Link>
        <button>
          <CiShoppingBasket className="text-[1.3rem]" />
        </button>
      </div>
    </DashboardLayout>
  );
};

