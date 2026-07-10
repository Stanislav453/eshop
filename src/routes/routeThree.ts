import { aboutRoute } from "./pages/aboutRoute";
import { indexRoute } from "./pages/indexRoute";
import { logInRoute } from "./pages/logInRoute";
import { registerRoute } from "./pages/registerRoute";
import { rootRoute } from "./rootRoute";

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  logInRoute,
  registerRoute,  
]);
