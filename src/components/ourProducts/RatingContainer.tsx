import { Cover } from "./Cover";
import { RatingIcon } from "./RatingIcon";

type RatingProps = { rating: number, justifyContent: "justify-center" | "justify-start" | "justify-end" };

export const RatingContainer = ({ rating, justifyContent }: RatingProps) => {
  const percentage = 100 - Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <div className={`w-full flex ${justifyContent}`}>
      <div className="relative  whitespace-nowrap">
        <RatingIcon />
        <Cover percentage={percentage} />
      </div>
    </div>
  );
};
