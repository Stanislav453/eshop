import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserStateType } from "../type";

export const useUser = create<UserStateType>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => {
        set({ user: null });
        useUser.persist.clearStorage();
      },
    }),
    {
      name: "user-storage",
    }
  )
);
