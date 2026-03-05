import type { CategoryType } from "../type";
import { toCamelCase } from "../utils/toCamelCase";
import { imgLoad } from "../utils/imgLoad";

type CategoryViewProps = {
  data: CategoryType[];
};

export const CategoryView = ({ data }: CategoryViewProps) => {
  return (
    <ul className="border px-2">
      {data?.map((category: CategoryType) => {
        const { id, name } = category;

        return (
          <li className="flex gap-2 py-4 px-2 border-b" key={id}>
            <img
              src={imgLoad({
                key: toCamelCase(name),
                height: "25",
                location: "category",
                end: "icon",
              })}
              alt={name}
            />
            <span className=" text-neutral-primary font-semibold">{name}</span>
          </li>
        );
      })}
    </ul>
  );
};
