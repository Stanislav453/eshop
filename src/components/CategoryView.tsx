import type { CategoryType } from "../type";
import { toCamelCase } from "../utils/toCamelCase";
import { imgLoad } from "../utils/imgLoad";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

type CategoryViewProps = {
  data: CategoryType[];
};

export const CategoryView = ({ data }: CategoryViewProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const categoryPanel = isOpen ? "max-h-dvh" : "max-h-0";

  return (
    <div className="flex-initial w-1/4 ">
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
      <ul
        className={`border px-2 overflow-hidden transition-all duration-300 ${categoryPanel}`}
      >
        {data?.map((category: CategoryType) => {
          const { id, name } = category;
          return (
            <li className="flex py-4 px-2 border-b" key={id}>
              <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
                <img
                  src={imgLoad({
                    key: toCamelCase(name),
                    height: "25",
                    location: "category",
                    end: "icon",
                  })}
                  alt={name}
                />
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
