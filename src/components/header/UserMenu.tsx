import React from "react";
import { CiLogout, CiSettings } from "react-icons/ci";
import type { UserType } from "../../type";
import { useUser } from "../../store/useUser";

type UserMenuProps = {
  user: UserType;
};

export const UserMenu = ({ user }: UserMenuProps) => {
  const logout = useUser((state) => state.logout);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-button-brand-primary text-neutral-tertiary text-[0.9rem] font-bold">
        {user.firstName.charAt(0).toUpperCase()}
      </div>
      <span className="hidden lg:inline">{user.firstName}</span>
      <button aria-label="Account settings">
        <CiSettings className="text-[1.3rem]" />
      </button>
      <button aria-label="Log out" onClick={logout}>
        <CiLogout className="text-[1.3rem]" />
      </button>
    </div>
  );
};
