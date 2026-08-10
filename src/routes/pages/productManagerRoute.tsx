import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { ProductManagerContainer } from "../../components/adminZone/ProductManagerContainer";

export const productManagerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/productManager",
  component: function ProductManager() {
    return <ProductManagerContainer />;
  },
});
