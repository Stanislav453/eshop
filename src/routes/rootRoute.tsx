import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { HeaderTopView } from "../components/HeaderTopView";
import ShopHeaderContainer from "../components/ShopHeaderContainer";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <HeaderTopView />
      <ShopHeaderContainer />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
