import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { AdminZoneContainer } from "../../components/adminZone/AdminZoneContainer";

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: function Admin() {
    return <AdminZoneContainer />;
  },
});
