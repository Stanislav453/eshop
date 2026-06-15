import type { LoadSkeletonProps } from "../../../type";

export const Skeleton = ({
  placeholdersCount,
  skeletonHeight,
}: LoadSkeletonProps) => {
  const placeholders = Array.from(Array(placeholdersCount).keys());

  return (
    <ul className="flex gap-6 flex-col sm:flex-row animate-pulse w-full">
      {placeholders.map((placeholder) => (
        <li
          style={{ height: `${skeletonHeight}px` }}
          key={placeholder}
          className={`w-full rounded-3xl bg-gray-300 mb-6`}
        ></li>
      ))}
    </ul>
  );
};
