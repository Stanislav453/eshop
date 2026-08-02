import { create } from "zustand";
import type { PopupStateType } from "../type";

export const usePopup = create<PopupStateType>()((set) => ({
  text: "",
  setText: (newText: string) => set({ text: newText }),
  closePopup: () => set({ text: "" }),
}));
