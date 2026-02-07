import { CiHeadphones } from "react-icons/ci";
import { Link } from "@tanstack/react-router";
import { DashboardLayout } from "./DashboardLayout";

export const NavContainer = () => {
  return (
    <DashboardLayout bg="bg-gradient-to-r from-blue-600 to-red-600">
      <div className="flex justify-center items-center ">
        <div>
          <CiHeadphones className="text-[1.6rem] text-neutral-tertiary  " />
        </div>
        <a
          className=" font-bold text-neutral-tertiary  hover:text-neutral-tertiary-hover"
          href="tel:(210) 123 456 7890"
        >
          (210) 123 456 7890
        </a>
      </div>
      <nav className="flex items-center gap-8 text-neutral-tertiary font-bold ">
        <Link
          to="/"
          className="hover:text-neutral-tertiary-hover  transition-colors"
        >
          HOME
        </Link>
        <Link
          to="/"
          className="hover:text-neutral-tertiary-hover  transition-colors"
        >
          SHOP
        </Link>
        <Link
          to="/"
          className="hover:text-neutral-tertiary-hover  transition-colors"
        >
          COLLECTION
        </Link>
        <Link
          to="/"
          className="hover:text-neutral-tertiary-hover  transition-colors"
        >
          BLOG
        </Link>
        <Link
          to="/"
          className="hover:text-neutral-tertiary-hover  transition-colors"
        >
          PAGES
        </Link>
      </nav>
      <button className="px-4 py-2 font-bold bg-special-primary  hover:bg-special-primary-hover hover:text-special-scondary-hover transition-colors">
        SPECIAL OFFERS
      </button>
    </DashboardLayout>
  );
};
