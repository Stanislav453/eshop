import { Link } from "@tanstack/react-router";
import { CiViewList } from "react-icons/ci";

export const AdminZoneContainer = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-5">Admin Zone</h1>
      <ul className="flex flex-col gap-2 bg-blue-300 p-2">
        <li className=" bg-blue-200 hover:bg-blue-400 transition-all">
          <Link
            className="flex gap-4 items-center px-2 py-2 "
            to="/productManager"
          >
            <span>
              <CiViewList />
            </span>
            <span>Product manager</span>
            <p>Manage your products</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
