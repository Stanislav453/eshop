export type ImgLoadType = {
  key: string;
  height?: "100" | "25";
  location: "category" | "product";
  end: "icon" | "cover";
};

export type CategoryType = {
  id: string;
  name: string;
  iconId: string;
  bgId: string;
};
