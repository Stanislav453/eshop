import { useState } from "react";

type ManagerGalleryProps = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
};

export const ManagerGallery = ({
  images,
  initialIndex,
  onClose,
}: ManagerGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const showPrevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-6 text-white text-3xl font-bold cursor-pointer"
        onClick={onClose}
      >
        &times;
      </button>

      {images.length > 1 && (
        <button
          type="button"
          className="absolute left-4 text-white text-4xl font-bold cursor-pointer select-none"
          onClick={(e) => {
            e.stopPropagation();
            showPrevImage();
          }}
        >
          &#8249;
        </button>
      )}

      <img
        className="max-w-[90vw] max-h-[90vh] object-contain"
        src={images[currentIndex]}
        alt="Gallery image"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          type="button"
          className="absolute right-4 text-white text-4xl font-bold cursor-pointer select-none"
          onClick={(e) => {
            e.stopPropagation();
            showNextImage();
          }}
        >
          &#8250;
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};
