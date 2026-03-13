import type { BuildImageUrlType } from "../type";

export const buildImageUrl = ({ imageId, options }: BuildImageUrlType) => {
  const BASE_IMAGE_URL = "https://res.cloudinary.com/dr4oaerzd/image/upload/";
  const setOptions = options ? `/h_${options.height}` : "";

  if (!imageId || imageId.trim().length === 0) {
    console.log("Image id cannot be empty");
  }

  return `${BASE_IMAGE_URL}${setOptions}/${imageId}`;
};
