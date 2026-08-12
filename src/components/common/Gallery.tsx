import { useState } from "react";
import { ManagerGallery } from "../adminZone/ManagerGallery";

type PmGalleryProps = {
  images: string[];
};

export const Gallery = ({ images }: PmGalleryProps) => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <>
      <ul className="flex flex-row gap-2">
        {images.map((image, index) => {
          return (
            <li key={`gallery-${image}-${index}`}>
              <img
                className="w-[200px] object-contain cursor-pointer"
                src={image}
                alt="img"
                onClick={() => {
                  openGallery(index);
                }}
              />
            </li>
          );
        })}
      </ul>

      {isGalleryOpen && (
        <ManagerGallery
          images={images}
          initialIndex={galleryIndex}
          onClose={closeGallery}
        />
      )}
    </>
  );
};
