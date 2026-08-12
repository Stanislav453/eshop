import { useState } from "react";
import { Formik } from "formik";
import { IoAddOutline } from "react-icons/io5";
import { useAddData } from "../../hooks/useAddData";
import { usePopup } from "../../store/usePopup";
import { PRODUCT_PLACEHOLDER_IMAGE } from "../../api/apiUrl";
import type { ProductType } from "../../type";
import { createProductValSchema } from "./addProductForm/createProductValSchema";
import { CreateProductForm } from "./addProductForm/CreateProductForm";
import { addProductinitialValues } from "./addProductForm/addProductinitialValues";
import { getSlugForCategory } from "../../utils/getSlugForCategory";

export const CreateProductContainer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { mutateAsync: addProduct } = useAddData<ProductType>({
    endpoint: "products",
  });

  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsFormOpen((prev) => !prev)}
        className="flex items-center text-2xl bg-green-600 py-2 px-4 rounded-full mb-4 text-white"
      >
        <span>{isFormOpen ? "Close" : "Add product"}</span>
        <IoAddOutline />
      </button>

      {isFormOpen && (
        <Formik
          initialValues={addProductinitialValues}
          validationSchema={createProductValSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              await addProduct({
                title: values.title.trim(),
                price: Number(values.price),
                rating: Number(values.rating),
                discount: Number(values.discount),
                specialOfferEnd: Number(values.specialOfferEnd),
                brand: values.brand.trim(),
                description: values.description.trim(),
                category: values.category,
                sku: values.sku.trim(),
                availability: values.availability,
                slug: getSlugForCategory(values.category),
                thumbnail: PRODUCT_PLACEHOLDER_IMAGE,
                images: [
                  PRODUCT_PLACEHOLDER_IMAGE,
                  PRODUCT_PLACEHOLDER_IMAGE,
                  PRODUCT_PLACEHOLDER_IMAGE,
                ],
                comments: [],
              });
              usePopup.getState().setText("Product created successfully!");
              resetForm();
              closeForm();
            } catch (error) {
              usePopup
                .getState()
                .setText("Failed to create product. Please try again.");
              console.log(error);
            }
          }}
        >
          <CreateProductForm onCancel={closeForm} />
        </Formik>
      )}
    </div>
  );
};
