import { useState } from "react";
import { ManagerGallery } from "../adminZone/ManagerGallery";

type PmGalleryProps = {
  images: string[];
};

export const Gallery = ({ images }: PmGalleryProps) => {
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openGallery = (images: string[], index: number) => {
    setGalleryImages(images);
    setGalleryIndex(index);
  };

  const closeGallery = () => {
    setGalleryImages(null);
  };

  return (
    <>
      <ul className="flex gap-2 flex-wrap">
        {images.map((image, index) => {
          return (
            <li key={`gallery-${image}-${index}`}>
              <img
                className="w-[200px] h-[200px] object-contain cursor-pointer"
                src={image}
                alt="img"
                onClick={() => {
                  openGallery(images, index);
                }}
              />
            </li>
          );
        })}
      </ul>

      {galleryImages && (
        <ManagerGallery
          images={galleryImages}
          initialIndex={galleryIndex}
          onClose={closeGallery}
        />
      )}
    </>
  );
};
