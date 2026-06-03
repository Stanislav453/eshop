import { advertisingBaners } from "../../utils/advertisingBaners.tsx";
import { AdvertisingBannersView } from "./AdvertisingBannersView";

export const AdvertisingBannersContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 mt-12 lg:mt-24">
      {advertisingBaners.map((baner, index) => (
        <AdvertisingBannersView key={index} text={baner.text} src={baner.src} />
      ))}
    </div>
  );
};
