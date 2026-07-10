import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { RegisterContainer } from "../../components/registerContainer/RegisterContainer";

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: function Register() {
    return <RegisterContainer />;
  },
});
