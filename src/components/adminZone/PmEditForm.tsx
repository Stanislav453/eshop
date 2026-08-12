import { useState } from "react";
import { useUpdateData } from "../../hooks/useUpdateData";
import { usePopup } from "../../store/usePopup";
import { CategoryOptions } from "../../type";
import type { ProductType } from "../../type";

type EditableProductFields = Omit<
  ProductType,
  "id" | "thumbnail" | "images" | "comments"
>;

type PmEditFormProps = {
  product: ProductType;
  onCancel: () => void;
  onSaved: () => void;
};

export const PmEditForm = ({ product, onCancel, onSaved }: PmEditFormProps) => {
  const {
    title,
    price,
    rating,
    discount,
    specialOfferEnd,
    brand,
    description,
    category,
    sku,
    availability,
    slug,
  } = product;
  const [formData, setFormData] = useState<EditableProductFields>({
    title: title,
    price: price,
    rating: rating,
    discount: discount,
    specialOfferEnd: specialOfferEnd,
    brand: brand,
    description: description, 
    category: category,
    sku: sku,
    availability: availability,
    slug: slug,
  });

  const { mutate: updateProduct, isPending } = useUpdateData<ProductType>({
    endpoint: "products",
  });

  const handleChange = (
    field: keyof EditableProductFields,
    value: string | number | boolean,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    updateProduct(
      { id: product.id, data: { ...product, ...formData } },
      {
        onSuccess: () => {
          usePopup.getState().setText("Product updated successfully!");
          onSaved();
        },
        onError: () => {
          usePopup
            .getState()
            .setText("Failed to update product. Please try again.");
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-2 bg-blue-100 p-3 w-full">
      <label className="flex flex-col">
        <span className="font-bold">Title</span>
        <input
          className="border rounded px-2 py-1"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </label>

      <label className="flex flex-col">
        <span className="font-bold">Price</span>
        <input
          type="number"
          className="border rounded px-2 py-1"
          value={formData.price}
          onChange={(e) => handleChange("price", Number(e.target.value))}
        />
      </label>

      <label className="flex flex-col">
        <span className="font-bold">Discount</span>
        <input
          type="number"
          className="border rounded px-2 py-1"
          value={formData.discount}
          onChange={(e) => handleChange("discount", Number(e.target.value))}
        />
      </label>

      <label className="flex flex-col">
        <span className="font-bold">Special Offer End</span>
        <input
          type="number"
          className="border rounded px-2 py-1"
          value={formData.specialOfferEnd}
          onChange={(e) =>
            handleChange("specialOfferEnd", Number(e.target.value))
          }
        />
      </label>

      <label className="flex flex-col">
        <span className="font-bold">Brand</span>
        <input
          className="border rounded px-2 py-1"
          value={formData.brand}
          onChange={(e) => handleChange("brand", e.target.value)}
        />
      </label>

      <label className="flex flex-col">
        <span className="font-bold">Category</span>
        <select
          className="border rounded px-2 py-1"
          value={formData.category}
          onChange={(e) =>
            handleChange("category", e.target.value as CategoryOptions)
          }
        >
          {Object.values(CategoryOptions).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col">
        <span className="font-bold">SKU</span>
        <input
          className="border rounded px-2 py-1"
          value={formData.sku}
          onChange={(e) => handleChange("sku", e.target.value)}
        />
      </label>

      <label className="flex flex-row items-center gap-2">
        <input
          type="checkbox"
          checked={formData.availability}
          onChange={(e) => handleChange("availability", e.target.checked)}
        />
        <span className="font-bold">Availability</span>
      </label>

      <label className="flex flex-col">
        <span className="font-bold">Slug</span>
        <input
          className="border rounded px-2 py-1"
          value={formData.slug}
          onChange={(e) => handleChange("slug", e.target.value)}
        />
      </label>

      <label className="flex flex-col">
        <span className="font-bold">Rating</span>
        <input
          type="number"
          step="0.1"
          className="border rounded px-2 py-1"
          value={formData.rating}
          onChange={(e) => handleChange("rating", Number(e.target.value))}
        />
      </label>

      <label className="flex flex-col">
        <span className="font-bold">Description</span>
        <textarea
          className="border rounded px-2 py-1"
          rows={4}
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </label>

      <div className="flex gap-2 mt-2">
        <button
          onClick={handleSave}
          disabled={isPending}
          className="bg-green-600 py-2 px-4 text-white rounded-3xl disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Save"}
        </button>
        <button
          onClick={onCancel}
          disabled={isPending}
          className="bg-gray-500 py-2 px-4 text-white rounded-3xl disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
