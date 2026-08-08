import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import elesaLogo from "../../../public/elesaLogo.webp";
import { ShopHeaderMenuView } from "./ShopHeaderMenuView";
import { ShopHeaderUserMenu } from "./ShopHeaderUserMenu";

export const ShopHeaderContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between my-2">
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
        <img src={elesaLogo} alt="elesa_logo" />
      </button>
      <ShopHeaderUserMenu setIsOpen={setIsOpen} />
      {isOpen && <ShopHeaderMenuView setIsOpen={setIsOpen} />}
    </div>
  );
};
