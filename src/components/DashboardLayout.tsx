import React from "react";
type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <section className="container mx-auto p-2">
      <div className="max-w-xl flex justify-between mx-auto">{children}</div>
    </section>
  );
};

export default DashboardLayout;
