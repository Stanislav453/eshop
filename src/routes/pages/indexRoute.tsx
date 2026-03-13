import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { ShopHeroContainer } from "../../components/shopHeroContainer/ShopHeroContainer";
import { ShopCategoriesContainer } from "../../components/shopCategories/ShopCategoriesContainer";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <main className=" p-2">
        <ShopHeroContainer />
        <ShopCategoriesContainer />
      </main>
    );
  },
});
