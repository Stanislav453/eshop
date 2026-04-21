import { Outlet } from "@tanstack/react-router";

export const MainContent = () => {
  return (
    <main className=" flex flex-col gap-14 max-w-xl container mx-auto p-2">
      <Outlet />
    </main>
  );
};
