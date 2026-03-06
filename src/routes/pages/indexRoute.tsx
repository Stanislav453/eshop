import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { ShopHeroContainer } from "../../components/ShopHeroContainer";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <main className=" p-2">
        <ShopHeroContainer />
      </main>
    );
  },
});
