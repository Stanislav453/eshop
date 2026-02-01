import { Link } from "@tanstack/react-router";
import { CiInstagram, CiLocationOn } from "react-icons/ci";

export const HeaderTopView = () => {
  return (
    <div>
      <div className="container mx-auto p-2">
        <div className="max-w-xl flex justify-between">
          <div className="flex gap-5">
            <span className="flex items-center gap-2 text-neutral-secondary">
              <CiLocationOn className="text-icon-sm" />
              Find stores
            </span>
            <span className="flex items-center gap-2  text-neutral-secondary">
              <CiInstagram className="text-icon-sm" />
              100k Followers
            </span>
          </div>
          <p className="text-neutral-secondary">
            Free delivery on orders over $100 discount.
          </p>
          <div className="flex gap-6" >
            <Link to="/about" className="text-neutral-secondary hover:text-neutral-primary transition-colors">
              About us
            </Link>
            <Link to="/" className="text-neutral-secondary hover:text-neutral-primary transition-colors">
              Contact us
            </Link>
            <Link to="/" className="text-neutral-secondary hover:text-neutral-primary transition-colors">
              Order tracking
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
