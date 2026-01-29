import { aboutRoute } from "./aboutRoute";
import { indexRoute } from "./indexRoute";
import { rootRoute } from "./rootRoute";

export const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);
