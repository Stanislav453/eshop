import type { CategoryType } from "../../type";
import { buildImageUrl } from "../../utils/buildImageUrl";

type CategoryItemProps = {
  data: CategoryType[];
  isOpen: boolean;
};

export const CategoryItem = ({ data, isOpen }: CategoryItemProps) => {
  const categoryPanel = isOpen ? "max-h-dvh" : "max-h-0";

  return (
    <ul
      className={`border px-2 overflow-hidden transition-all duration-300 ${categoryPanel}`}
    >
      {data.map((category: CategoryType) => {
        const { id, name, iconId } = category;
        return (
          <li className="flex py-4 px-2 border-b" key={id}>
            <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
              <img
                src={buildImageUrl({
                  imageId: iconId,
                  options: { height: 25 },
                })}
                alt={name}
              />
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

