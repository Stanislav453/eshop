import { useEffect } from "react";
import { usePopup } from "../../store/usePopup";

export const Popup = () => {
  const text = usePopup((state) => state.text);
  const clearPopup = usePopup((state) => state.closePopup);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearPopup();
    }, 2500);
    return () => clearTimeout(timer);
  }, [text]);

  return text ? (
    <div className="fixed top-4 right-4 bg-white px-8 py-4 border font-bold">
      {text}
    </div>
  ) : null;
};
