import { create } from "zustand";
import type { ProductDetailStateType, ProductDetailType } from "../type";

export const useGetProductDetail = create<ProductDetailStateType>()((set) => ({
  productDetail: null,
  setproductDetail: (newProductDetail: ProductDetailType) =>
    set({ productDetail: newProductDetail }),
  closeproductDetail: () => set({ productDetail: null }),
}));
