import { redirect } from "@tanstack/react-router";
import { useUser } from "../../store/useUser";

export const requireAdmin = () => {
  const user = useUser.getState().user;

  if (!user?.isAdmin) {
    throw redirect({ to: "/" });
  }
};
