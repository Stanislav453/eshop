import { Link } from "@tanstack/react-router";
import { CiInstagram, CiLocationOn } from "react-icons/ci";

export const HeaderTopView = () => {
  return (
      <div className="flex flex-row justify-between py-2">
        <div className="hidden w-full gap-5 lg:flex ">
          <span className="flex items-center gap-2 text-neutral-secondary">
            <CiLocationOn className="text-icon-sm" />
            Find stores
          </span>
          <span className="flex items-center gap-2  text-neutral-secondary">
            <CiInstagram className="text-icon-sm" />
            100k Followers
          </span>
        </div>
        <p className="w-full text-center  text-neutral-secondary">
          Free delivery on orders over $100 discount.
        </p>
        <div className="hidden w-full gap-6 lg:flex justify-end">
          <Link
            to="/about"
            className="text-neutral-secondary hover:text-neutral-primary transition-colors"
          >
            About us
          </Link>
          <Link
            to="/"
            className="text-neutral-secondary hover:text-neutral-primary transition-colors"
          >
            Contact us
          </Link>
          <Link
            to="/"
            className="text-neutral-secondary hover:text-neutral-primary transition-colors"
          >
            Order tracking
          </Link>
        </div>
        <hr />
      </div>
  );
};
