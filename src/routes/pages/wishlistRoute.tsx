import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { WishlistContainer } from "../../components/wishlist/WishlistContainer";

export const wishlistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wishlist",
  component: function Wishlist() {
    return <WishlistContainer />;
  },
});
