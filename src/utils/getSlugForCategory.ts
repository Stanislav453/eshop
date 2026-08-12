import { filterCategory } from "./filterCategory";
import type { CategoryOptions, FilterSlugOptions } from "../type";

export const getSlugForCategory = (
  category: CategoryOptions,
): FilterSlugOptions => filterCategory.find((item) => item.title === category)!.slug;
