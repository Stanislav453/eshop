import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";
import { SliderContainer } from "../../components/SliderContainer";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {



    return (
      <main className=" p-2">
        <SliderContainer />
      </main>
    );
  },
});
