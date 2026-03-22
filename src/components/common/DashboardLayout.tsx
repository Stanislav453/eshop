import React from "react";
type DashboardLayoutProps = {
  sectionClassName?: string;
  childrenClassName?: string;
  children: React.ReactNode;
  direction: "flex-row" | "flex-col";
};

export const DashboardLayout = ({
  sectionClassName,
  childrenClassName,
  children,
  direction,
}: DashboardLayoutProps) => {
  return (
    <section className={sectionClassName}>
      <div className="container mx-auto p-2">
        <div className={`max-w-xl flex ${direction} ${childrenClassName} mx-auto`}>
          {children}
        </div>
      </div>
    </section>
  );
};
