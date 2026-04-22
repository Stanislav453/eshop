import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { IndexContainer } from "../../components/rootContainer/IndexContainer";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <IndexContainer />;
  },
});
