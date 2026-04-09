import type { EmblaRootNodeRefType } from "embla-carousel-react";
import type { CategoryType } from "../../type";
import { LoadingSpiner } from "../common/LoadingSpiner";
import { ErrorActive } from "../common/ErrorActive";
import { createImageUrl } from "../../utils/createImageUrl";

type ImageCarouselProps = {
  emblaRef: EmblaRootNodeRefType;
  data: CategoryType[];
  isError: boolean;
  isPending: boolean;
  error: Error | null;
};

export const ImageCarousel = ({
  emblaRef,
  data,
  isError,
  isPending,
  error,
}: ImageCarouselProps) => {
  if (isPending) return <LoadingSpiner />;

  if (isError)
    return ErrorActive({
      error: error,
    });

  return (
    <section className="embla__shop_category_controls">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container_category">
          {data.map((data, index) => {
            const { name, bgId } = data;
            return (
              <div className="embla__shop_category " key={index}>
                <div className="embla__slide__number_category bg-box-brand-color ">
                  <div>
                    <div className="w-[130px] h-[130px] ">
                      <img
                        src={createImageUrl({
                          url: bgId,
                          height: 130,
                        })}
                        alt={name}
                      />
                    </div>
                    <h3 className=" pt-3  text-[1.1rem] text-center">{name}</h3>
                    <p className=" text-[.9rem] text-center text-paragraph-primary font-thin ">
                      10 items
                    </p>
                  </div>
                  <div className="overlay bg-gradient-to-r from-blue-600 to-red-600">
                    <button className="px-4 py-2 text-[1rem] bg-neutral-tertiary hover:bg-primary-hover hover:text-neutral-tertiary transition-colors duration-300">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
