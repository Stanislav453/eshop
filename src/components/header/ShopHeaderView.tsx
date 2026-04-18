import {
  CiCircleRemove,
  CiHeadphones,
  CiHeart,
  CiSearch,
  CiShoppingBasket,
  CiUser,
} from "react-icons/ci";
import { Link } from "@tanstack/react-router";
import { DashboardLayout } from "../common/DashboardLayout";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const ShopHeaderView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DashboardLayout direction="flex-row" childrenClassName="justify-between">
      <div className="hidden lg:flex">
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
      <button className="w-[106px] py-3">
        <img src="../../public/elesaLogo.webp" alt="elesa_logo" />
      </button>
      <div className="flex gap-4 lg:gap-8">
        <button>
          <RxHamburgerMenu className="block lg:hidden text-[1.3rem]" />
        </button>
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
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-[50] bg-black-rgba">
          <nav className="bg-white w-[315px] h-full">
            <div className="w-full flex justify-end">
              <button>
                <CiCircleRemove className="text-[2.5rem] m-3" />
              </button>
            </div>
            <a
              href="tel:+123456789"
              className="flex items-center justify-center gap-2 w-full p-2 text-neutral-tertiary bg-gradient-to-r from-blue-600 to-red-600"
            >
              <span>
                <CiHeadphones className="text-[1.5rem]" />
              </span>
              <span className="text-[1.3rem]">+123456789</span>
            </a>
            <ul className="font-bold">
              <li>
                <a href="#" className="block py-3 pl-2 border-b">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-3 pl-2 border-b">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="block py-3 pl-2 border-b">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="block py-3 pl-2 border-b">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="block py-3 pl-2 border-b">
                  Pages
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </DashboardLayout>
  );
};
