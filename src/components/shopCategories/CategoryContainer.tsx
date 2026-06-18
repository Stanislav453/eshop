import { IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { CategoryItemContainer } from "./CategoryItemContainer";

const BREAKPOINT = 1024;

export const CategoryContainer = () => {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.innerWidth > BREAKPOINT;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full lg:w-1/4">
      <div className="flex justify-between gap-2 items-center w-full p-4 bg-box-brand-color text-neutral-primary font-bold">
        <span>
          <IoIosMenu className="text-icon-sm" />
        </span>

        <p>Shop by categories</p>

        <button type="button" onClick={handleToggle}>
          <MdKeyboardArrowDown
            className={`text-icon-sm transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            } hover:text-primary-hover cursor-pointer transition-colors`}
          />
        </button>
      </div>

      <CategoryItemContainer isOpen={isOpen} />
    </div>
  );
};