import { IoIosMenu } from "react-icons/io";
import { DashboardLayout } from "./DashboardLayout";
import { MdKeyboardArrowDown } from "react-icons/md";

export const SliderContainer = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-8 w-full pt-4" >
        <div className="flex-initial w-1/4 " >
          <button className="flex gap-2 items-center w-full p-4 bg-box-brand-color text-neutral-primary font-bold ">
            <span>
              <IoIosMenu />
            </span>
            Shop by categories
            <span>
              <MdKeyboardArrowDown />
            </span>
          </button>
          <ul></ul>
        </div>
        <div className="flex-initial w-2/4" >
          <img src="../../public/slider-1.webp" alt="Slider" />
        </div>
        <div className="flex-initial w-1/4" >
          <img src="../../public/offer-banner.webp" alt="Offer Banner" />
        </div>
      </div>
    </DashboardLayout>
  );
};
