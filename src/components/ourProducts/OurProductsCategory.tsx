import { useState } from "react";
import {
  CategoryOptions,
  type FilterCategoryType,
  type FilterValue,
} from "../../type";
import { filterCategory } from "../../utils/filterCategory";

type OurProductsCategoryType = {
  setSlug: (slug: FilterValue) => void;
};

export const OurProductsCategory = ({ setSlug }: OurProductsCategoryType) => {
  const [isActiveCategory, setIsActiveCategory] = useState<CategoryOptions>(
    CategoryOptions.DSLRcamera,
  );
  return (
    <ul className="flex flex-wrap gap-6 pt-4 pb-10 uppercase font-semibold text-neutral-secondary">
      {filterCategory.map((filterValue: FilterCategoryType) => {
        const { slug, title } = filterValue;
        const isActive =
          isActiveCategory === title
            ? "before:w-full text-neutral-primary "
            : "before:w-0";

        return (
          <li key={slug}>
            <button
              onClick={() => {
                setSlug(slug);
                setIsActiveCategory(title);
              }}
              className={`relative leading-tight uppercase before:content-[''] before:absolute  before:bottom-0 before:left-0 ${isActive} hover:before:w-full before:h-px before:bg-neutral-primary before:transition-all before:duration-300 hover:text-neutral-primary hover:duration-300`}
            >
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
