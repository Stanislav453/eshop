import { advertisingBaners } from "../../utils/advertisingBaners"
import { AdvertisingBannersView } from "./AdvertisingBannersView"

export const AdvertisingBannersContainer = () => {
  return (
    <div className="flex gap-16 mt-24">
        {
          advertisingBaners.map((baner,index) => <AdvertisingBannersView key={index} text={baner.text} src={baner.src} />)
        }
    </div>
  )
}

