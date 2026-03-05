import { IoIosMenu } from "react-icons/io";
import { DashboardLayout } from "./DashboardLayout";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { CategoryView } from "./CategoryView";

export const SliderContainer = () => {
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://696cdbeff4a79b31517ff504.mockapi.io/categories").then(
        (res) => res.json(),
      ),
  });

  if (!data) return null;

  return (
    <DashboardLayout>
      <div className="flex gap-8 w-full pt-4">
        <div className="flex-initial w-1/4 ">
          <button className="flex gap-2 items-center w-full p-4 bg-box-brand-color text-neutral-primary font-bold ">
            <span>
              <IoIosMenu />
            </span>
            Shop by categories
            <span>
              <MdKeyboardArrowDown />
            </span>
          </button>
          <CategoryView data={data} />
        </div>
        <div className="flex-initial w-2/4">
          <img className="w-full h-full" src="../../public/slider-1.webp" alt="Slider" />
        </div>
        <div className="flex-initial w-1/4">
          <img className="w-full h-full" src="../../public/offer-banner.webp" alt="Offer Banner" />
        </div>
      </div>
    </DashboardLayout>
  );
};
