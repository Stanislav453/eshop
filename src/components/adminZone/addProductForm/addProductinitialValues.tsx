import { CategoryOptions, type CreateProductFormValues } from "../../../type";

export const addProductinitialValues: CreateProductFormValues = {
  title: "",
  price: "",
  rating: "",
  discount: "",
  specialOfferEnd: "",
  brand: "",
  description: "",
  category: CategoryOptions.DSLRcamera,
  sku: "",
  availability: true,
};
