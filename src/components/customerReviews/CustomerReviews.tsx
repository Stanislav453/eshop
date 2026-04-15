import React from "react";
import { CustomerReviewList } from "./CustomerReviewList";
import type { EmblaRootNodeRefType } from "embla-carousel-react";
import type { CustomerReviewType } from "../../type";
import { ErrorActive } from "../common/ErrorActive";
import { LoadingSpiner } from "../common/LoadingSpiner";

type CustomerReviewsType = {
  data: CustomerReviewType[];
  emblaRef: EmblaRootNodeRefType;
  error: Error | null;
  isError: boolean;
  isPending: boolean;
};

export const CustomerReviews = ({
  data,
  emblaRef,
  isError,
  error,
  isPending,
}: CustomerReviewsType) => {
  if (isError) {
    ErrorActive({ error: error });
  }

  if (isPending) return <LoadingSpiner />;

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
