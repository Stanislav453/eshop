import * as Yup from "yup";
import { CategoryOptions } from "../../../type";

export const requiredTrimmedString = (min: number) =>
  Yup.string()
    .required("Required")
    .test(
      "not-whitespace-only",
      "not allowed to be empty or just whitespace",
      (value) => !!value && value.trim().length > 0,
    )
    .min(min, `required to be at least ${min} characters`);

export const requiredNumber = () =>
  Yup.number()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value,
    )
    .typeError("required to be a valid number")
    .required("Required");

export const createProductValSchema = Yup.object({
  title: requiredTrimmedString(4),
  price: requiredNumber().moreThan(1, "required to be more than 1"),
  brand: requiredTrimmedString(5),
  sku: requiredTrimmedString(3),
  description: requiredTrimmedString(10),
  rating: requiredNumber()
    .min(0, "required to be at least 0")
    .max(5, "required to be at most 5"),
  category: Yup.mixed<CategoryOptions>()
    .oneOf(Object.values(CategoryOptions), "Required")
    .required("Required"),
  availability: Yup.boolean().required(),
});
