import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { HeaderTopView } from "../components/HeaderTopView";
import { ShopHeaderContainer } from "../components/ShopHeaderContainer";
import { NavContainer } from "../components/NavContainer";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <HeaderTopView />
      <ShopHeaderContainer />
      <NavContainer />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
