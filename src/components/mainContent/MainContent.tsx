import { Outlet } from "@tanstack/react-router";
import { DashboardLayout } from "../common/DashboardLayout";

export const MainContent = () => {
  return (
    <DashboardLayout>
      <main className=" flex flex-col gap-14">
        <Outlet />
      </main>
    </DashboardLayout>
  );
};
