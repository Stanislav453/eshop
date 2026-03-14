import type { AdvertisingBannersType } from "../../type";
import { MdArrowOutward } from "react-icons/md";

export const AdvertisingBannersView = ({
  text,
  src,
}: AdvertisingBannersType) => {
  return (
    <div className="h-baners group overflow-hidden relative cursor-pointer">
      <div className="absolute z-10 w-full flex justify-around items-center mt-10 px-8">
        <h3 className="text-[1.8rem] font-bold text-neutral-primary ">
          {text}
        </h3>
        <button className="bg-neutral-primary text-white p-3  transition-color duration-500 group-hover:bg-primary-hover">
          <MdArrowOutward className="text-[1.5rem]" />
        </button>
      </div>
      <img
        className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
        src={src}
        alt="banner"
      />
    </div>
  );
};
