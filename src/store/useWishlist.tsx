import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { WishlistStateType } from "../type";

export const useWishlist = create<WishlistStateType>()(
  persist(
    (set, get) => ({
      wishlistIds: [],
      toggleWishlist: (id) => {
        const { wishlistIds } = get();
        set({
          wishlistIds: wishlistIds.includes(id)
            ? wishlistIds.filter((wishlistId) => wishlistId !== id)
            : [...wishlistIds, id],
        });
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);
