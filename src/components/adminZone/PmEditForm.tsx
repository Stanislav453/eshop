import { Formik } from "formik";
import { useUpdateData } from "../../hooks/useUpdateData";
import { usePopup } from "../../store/usePopup";
import type { ProductType } from "../../type";
import { pmEditValSchema } from "./editProductForm/pmEditValSchema";
import { getPmEditInitialValues } from "./editProductForm/pmEditInitialValues";
import { PmEditFormFields } from "./editProductForm/PmEditFormFields";

type PmEditFormProps = {
  product: ProductType;
  onCancel: () => void;
  onSaved: () => void;
};

export const PmEditForm = ({ product, onCancel, onSaved }: PmEditFormProps) => {
  const { mutateAsync: updateProduct } = useUpdateData<ProductType>({
    endpoint: "products",
  });

  return (
    <Formik
      initialValues={getPmEditInitialValues(product)}
      validationSchema={pmEditValSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await updateProduct({
            id: product.id,
            data: {
              ...product,
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
              slug: values.slug.trim(),
            },
          });
          usePopup.getState().setText("Product updated successfully!");
          onSaved();
        } catch (error) {
          usePopup
            .getState()
            .setText("Failed to update product. Please try again.");
          console.log(error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <PmEditFormFields onCancel={onCancel} />
    </Formik>
  );
};
