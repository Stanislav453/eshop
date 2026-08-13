import { createProductValSchema, requiredTrimmedString } from "../addProductForm/createProductValSchema";

export const pmEditValSchema = createProductValSchema.shape({
  slug: requiredTrimmedString(3),
});
