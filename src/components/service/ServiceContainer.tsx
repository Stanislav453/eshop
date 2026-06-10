import {
  CiCreditCard1,
  CiDeliveryTruck,
  CiHeadphones,
  CiRedo,
} from "react-icons/ci";
import { ServiceIcon } from "./ServiceIcon";

const ServiceContainer = () => {
  return (
    <div>
      <ul className="flex flex-wrap gap-8 justify-between mx-8">
        <ServiceIcon
          title="Free delivery"
          desc="Orders from all item"
          icon={<CiDeliveryTruck className="text-5xl" />}
        />
        <ServiceIcon
          title="Easy returns"
          desc="Easy returns"
          icon={<CiRedo className="text-5xl" />}
        />
        <ServiceIcon
          title="Online support"
          desc="Always online 24/7"
          icon={<CiHeadphones className="text-5xl" />}
        />
        <ServiceIcon
          title="Secure payment"
          desc="100% Secure payment"
          icon={<CiCreditCard1 className="text-5xl" />}
        />
      </ul>
    </div>
  );
};

export default ServiceContainer;
