import type { CreateImageUrlType } from "../type";

export const createImageUrl = ({ url, height }: CreateImageUrlType) => {

  if (!url || url.trim().length === 0) {
    console.log("Image url cannot be empty");
  }

  return url.replace("/upload/", `/upload/h_${height},c_fit,q_auto,f_auto/`);
};



