import type { ImgLoadType } from "../type";

export const imgLoad = ({ key, location, height, end }: ImgLoadType) => {
  const newHeight = height ? `/h_${height}` : "";

  return `https://res.cloudinary.com/dr4oaerzd/image/upload${newHeight}/${location}/${key}/${end}.webp`;
};
