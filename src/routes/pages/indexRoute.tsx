import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return (
      <div className="text-red-600 p-2">
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});
