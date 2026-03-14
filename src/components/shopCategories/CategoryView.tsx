import type { CategoryType } from "../../type";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { CategoryItem } from "./CategoryItemView";

type CategoryViewProps = {
  data: CategoryType[];
};

export const CategoryView = ({ data }: CategoryViewProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex-initial w-1/4">
      <div className="flex justify-between gap-2 items-center w-full p-4 bg-box-brand-color text-neutral-primary font-bold ">
        <span>
          <IoIosMenu className="text-icon-sm" />
        </span>
        <p>Shop by categories</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          <MdKeyboardArrowDown
            className={`text-icon-sm transition-transform ${isOpen ? "rotate-180" : ""} hover:text-primary-hover cursor-pointer transition-colors duration-300`}
          />
        </button>
      </div>
      <CategoryItem data={data} isOpen={isOpen} />
    </div>
  );
};
