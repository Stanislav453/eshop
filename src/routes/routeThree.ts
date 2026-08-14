import { aboutRoute } from "./pages/aboutRoute";
import { adminRoute } from "./pages/adminRoute";
import { indexRoute } from "./pages/indexRoute";
import { logInRoute } from "./pages/logInRoute";
import { productManagerRoute } from "./pages/productManagerRoute";
import { registerRoute } from "./pages/registerRoute";
import { wishlistRoute } from "./pages/wishlistRoute";
import { rootRoute } from "./rootRoute";


export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  logInRoute,
  registerRoute,
  adminRoute,
  productManagerRoute,
  wishlistRoute,
]);
