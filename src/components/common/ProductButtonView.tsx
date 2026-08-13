import React from "react";

type ProductButtonViewType = {
  title: string;
  icon: React.ElementType;
  onClick?: () => void
};

export const ProductButtonView = ({ title, icon, onClick }: ProductButtonViewType) => {
  const Icon = icon;
  return (
    <button
    onClick={onClick}
      title={title}
      className=" w-full flex justify-center  py-4 hover:bg-gradient-to-r from-blue-600 to-red-600 group  transition-all duration-500
                  relative  after:content-[attr(title)]
    after:absolute after:bottom-[3.7rem] after:left-3
    after:bg-black after:text-white after:text-sm
    after:px-2 after:py-1 after:rounded
    after:opacity-0 hover:after:opacity-100
    after:transition-opacity after:text-[.7rem]
                "
    >
      <Icon className="w-full block text-2xl text-neutral-secondary  group-hover:text-neutral-tertiary transition-all duration-100" />
    </button>
  );
};
