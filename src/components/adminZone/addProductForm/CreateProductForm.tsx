import { Form, useFormikContext } from "formik";
import { TextInput } from "../../common/form/TextInput";
import { SelectInput } from "../../common/form/SelectInput";
import { TextareaInput } from "../../common/form/TextareaInput";
import { Checkbox } from "../../common/form/CheckBox";
import { CategoryOptions, type CreateProductFormValues } from "../../../type";
import { PRODUCT_PLACEHOLDER_IMAGE } from "../../../api/apiUrl";
import { getSlugForCategory } from "../../../utils/getSlugForCategory";

type CreateProductFormProps = {
  onCancel: () => void;
};

export const CreateProductForm = ({ onCancel }: CreateProductFormProps) => {
  const { isSubmitting, values } =
    useFormikContext<CreateProductFormValues>();

  return (
    <Form className="flex flex-col gap-2 bg-blue-100 p-3 w-full">
      <div className="w-[200px]">
        <h5 className="font-bold">Thumbnail & preview images</h5>
        <img
          className="w-[200px] h-[200px] object-contain"
          src={PRODUCT_PLACEHOLDER_IMAGE}
          alt="Product placeholder"
        />
      </div>

      <TextInput label="Title" name="title" type="text" />
      <TextInput label="Price" name="price" type="number" />
      <TextInput label="Discount" name="discount" type="number" />
      <TextInput
        label="Special Offer End"
        name="specialOfferEnd"
        type="number"
      />
      <TextInput label="Brand" name="brand" type="text" />
      <SelectInput
        label="Category"
        name="category"
        options={Object.values(CategoryOptions)}
      />
      <p className="text-sm text-gray-600">
        Slug (auto): <span className="font-semibold">{getSlugForCategory(values.category)}</span>
      </p>
      <TextInput label="SKU" name="sku" type="text" />
      <Checkbox name="availability">Availability</Checkbox>
      <TextInput label="Rating" name="rating" type="number" step="0.1" />
      <TextareaInput label="Description" name="description" rows={4} />

      <div className="flex gap-2 mt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 py-2 px-4 text-white rounded-3xl disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="bg-gray-500 py-2 px-4 text-white rounded-3xl disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </Form>
  );
};
