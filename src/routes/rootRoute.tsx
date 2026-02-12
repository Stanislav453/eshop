import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { HeaderTopView } from "../components/HeaderTopView";
import { ShopHeaderView } from "../components/ShopHeaderView";
import { NavView } from "../components/NavView";

export const rootRoute = createRootRoute({
  component: () => (
    <header>
      <HeaderTopView />
      <ShopHeaderView />
      <NavView />
      <Outlet />
      <TanStackRouterDevtools />
    </header>
  ),
});
