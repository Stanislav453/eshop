import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { WishlistStateType } from "../type";

export const useWishlist = create<WishlistStateType>()(
  persist(
    (set, get) => ({
      wishlist: [],
      toggleWishlist: (item) => {
        const { wishlist } = get();
        const isInWishlist = wishlist.some((w) => w.id === item.id);
        set({
          wishlist: isInWishlist
            ? wishlist.filter((w) => w.id !== item.id)
            : [...wishlist, item],
        });
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);
