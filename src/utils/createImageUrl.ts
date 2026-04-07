import type { CreateImageUrlType } from "../type";

export const createImageUrl = ({ url, height }: CreateImageUrlType) => {
  return url.replace("/upload/", `/upload/h_${height},c_fit,q_auto,f_auto/`);
};
