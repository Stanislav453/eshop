import { Link } from "@tanstack/react-router";
import { CiInstagram, CiLocationOn } from "react-icons/ci";
import DashboardLayout from "./DashboardLayout";

export const HeaderTopView = () => {
  return (
    <header>
      <DashboardLayout>
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
        <div className="flex gap-6">
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
      </DashboardLayout>
      <hr />
    </header>
  );
};
