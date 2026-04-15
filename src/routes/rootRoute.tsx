import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { HeaderTopView } from "../components/header/HeaderTopView";
import { ShopHeaderView } from "../components/header/ShopHeaderView";
import { NavView } from "../components/header/NavView";
import { Footer } from "../components/footer/Footer";

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <HeaderTopView />
      <ShopHeaderView />
      <NavView />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </div>
  ),
});
