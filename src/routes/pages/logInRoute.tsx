import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { LogInContainer } from "../../components/logIn/LogInContainer";

export const logInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: function LogIn() {
    return <LogInContainer />;
  },
});
