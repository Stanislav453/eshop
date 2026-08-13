import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { AdminZoneContainer } from "../../components/adminZone/AdminZoneContainer";
import { requireAdmin } from "../guards/requireAdmin";

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  beforeLoad: requireAdmin,
  component: function Admin() {
    return <AdminZoneContainer />;
  },
});
