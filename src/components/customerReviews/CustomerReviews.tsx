import { CustomerReviewList } from "./CustomerReviewList";
import type { EmblaRootNodeRefType } from "embla-carousel-react";
import type { CustomerReviewType } from "../../type";

type CustomerReviewsType = {
  data: CustomerReviewType[];
  emblaRef: EmblaRootNodeRefType;
};

export const CustomerReviews = ({ data, emblaRef }: CustomerReviewsType) => {
  return (
    <div className="embla__shop_category_reviews">
      <div className="embla__viewport" ref={emblaRef}>
        <ul className="embla__container_reviews">
          {data.map((review) => {
            const { id, userName, comment, rating } = review;
            return (
              <CustomerReviewList
                id={id}
                userName={userName}
                comment={comment}
                rating={rating}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
