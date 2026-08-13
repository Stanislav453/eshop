import type { PmEditFormValues, ProductType } from "../../../type";

export const getPmEditInitialValues = (
  product: ProductType,
): PmEditFormValues => ({
  title: product.title,
  price: String(product.price),
  rating: String(product.rating),
  discount: String(product.discount),
  specialOfferEnd: String(product.specialOfferEnd),
  brand: product.brand,
  description: product.description,
  category: product.category,
  sku: product.sku,
  availability: product.availability,
  slug: product.slug,
});
