import { FaQuoteLeft } from "react-icons/fa";
import { RatingContainer } from "../ourProducts/RatingContainer";

type CustomerReviewListType = {
  id: string;
  userName: string;
  comment: string;
  rating: number;
};

export const CustomerReviewList = ({
  id,
  userName,
  comment,
  rating,
}: CustomerReviewListType) => {
  return (
    <li key={id} className="embla__shop_reviews">
      <div className="embla__slide__number_reviews bg-box-brand-color ">
        <div className="p-6">
          <span>
            <FaQuoteLeft className="text-4xl" />
          </span>
          <p className="text-lg font-thin py-4">{comment}</p>
          <div className="w-full flex ">
            <h3 className="w-full text-lg font-bold">{userName}</h3>
            <RatingContainer rating={rating} justifyContent={"justify-end"} />
          </div>
        </div>
      </div>
    </li>
  );
};
