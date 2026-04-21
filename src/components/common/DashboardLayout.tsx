import React from "react";
type DashboardLayoutProps = {
  sectionClassName?: string;
  childrenClassName?: string;
  children: React.ReactNode;
};

export const DashboardLayout = ({
  sectionClassName,
  children,
}: DashboardLayoutProps) => {
  return (
    <div className={sectionClassName}>
      <div className={`container mx-auto max-w-xl `}>{children}</div>
    </div>
  );
};
