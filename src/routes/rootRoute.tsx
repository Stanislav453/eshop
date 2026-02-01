import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { HeaderTopView } from "../components/HeaderTopView";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <HeaderTopView />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
