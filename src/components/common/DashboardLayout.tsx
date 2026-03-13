import React from "react";
type DashboardLayoutProps = {
  bg?: string;
  children: React.ReactNode;
};

export const DashboardLayout = ({ bg, children }: DashboardLayoutProps) => {
  return (
    <section className={`${bg}`}>
      <div className="container mx-auto p-2">
        <div className="max-w-xl flex justify-between mx-auto">{children}</div>
      </div>
    </section>
  );
};

