import { aboutRoute } from "./pages/aboutRoute";
import { indexRoute } from "./pages/indexRoute";
import { rootRoute } from "./rootRoute";

export const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);
