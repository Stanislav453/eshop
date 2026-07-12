import { advertisingBaners } from "../../utils/advertisingBaners";
import { AdvertisingBannersView } from "./AdvertisingBannersView";

const AdvertisingBannersContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
      {advertisingBaners.map((baner, index) => (
        <AdvertisingBannersView key={index} text={baner.text} src={baner.src} />
      ))}
    </div>
  );
};

export default AdvertisingBannersContent;
