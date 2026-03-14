import React from "react";
type DashboardLayoutProps = {
  className?: string;
  children: React.ReactNode;
  direction: "flex-row" | "flex-col";
};

export const DashboardLayout = ({
  className,
  children,
  direction,
}: DashboardLayoutProps) => {
  return (
    <section className={className}>
      <div className="container mx-auto p-2">
        <div className={`max-w-xl flex ${direction} justify-between mx-auto`}>
          {children}
        </div>
      </div>
    </section>
  );
};
