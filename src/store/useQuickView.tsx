import { create } from "zustand";
import type { ProductsViewType } from "../type";

type QuickViewStateType = {
  product: ProductsViewType | null;
  setProduct: (product: ProductsViewType) => void;
  clearProduct: () => void;
};

export const useQuickView = create<QuickViewStateType>()((set) => ({
  product: null,
  setProduct: (product) => set({ product }),
  clearProduct: () => set({ product: null }),
}));
