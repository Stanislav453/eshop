import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { ProductManagerContainer } from "../../components/adminZone/ProductManagerContainer";
import { requireAdmin } from "../guards/requireAdmin";

export const productManagerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/productManager",
  beforeLoad: requireAdmin,
  component: function ProductManager() {
    return <ProductManagerContainer />;
  },
});
