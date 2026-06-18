import { categories } from "./categoryItem";
import { CategoryItemView } from "./CategoryItemView";

type CategoryItemProps = {
  isOpen: boolean;
};

export const CategoryItemContainer = ({ isOpen }: CategoryItemProps) => {
  const categoryPanel = isOpen ? "max-h-dvh" : "max-h-0";

  return (
    <ul
      className={`border px-2 overflow-hidden transition-all duration-300 ${categoryPanel}`}
    >
      {categories.map((category) => (
        <CategoryItemView
          key={category.title}
          title={category.title}
          src={category.src}
        />
      ))}
    </ul>
  );
};
