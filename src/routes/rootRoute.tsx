import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NavView } from "../components/header/NavView";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MainContent } from "../components/mainContent/MainContent";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Header />
      <NavView />
      <MainContent />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
