import { sliderImages } from "../utils/sliderImages";

export const SliderImagesView = () => {
  return (
    <div className="embla__container h-shop-product-container">
      {sliderImages.map((image, index) => {
        const { title, src, price } = image;
        return (
          <div className="embla__slide" key={index}>
            <div className="absolute w-full text-center pt-8">
              <p>
                <span className="capitalize text-neutral-primary ">
                  START FROM
                </span>
                <span className="font-bold border-b border-neutral-primary ml-2">
                  ${price}
                </span>
              </p>
              <h3 className="text-[3rem] text-neutral-primary font-bold">
                {title}
              </h3>
              <button className="bg-neutral-primary py-3 px-6 text-[1rem] font-semibold text-neutral-tertiary uppercase mt-4 ">
                shop now
              </button>
            </div>
            <img
              className="w-full h-full"
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </div>
        );
      })}
    </div>
  );
};
