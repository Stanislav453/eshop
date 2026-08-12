import { useDeleteData } from "../../hooks/useDeleteData";
import { usePopup } from "../../store/usePopup";
import type { ProductType } from "../../type";

type PmDelUpButtonsProps = {
  id: string;
  onEdit: () => void;
};

export const PmDelUpButtons = ({ id, onEdit }: PmDelUpButtonsProps) => {
  const { mutate: deleteProduct, isPending } = useDeleteData<ProductType>({
    endpoint: "products",
  });

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    deleteProduct(id, {
      onSuccess: () => {
        usePopup.getState().setText("Product deleted successfully!");
      },
      onError: () => {
        usePopup
          .getState()
          .setText("Failed to delete product. Please try again.");
      },
    });
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <button
        onClick={handleDelete}
        disabled={isPending}
        className="w-full bg-red-600 py-2 px-4 text-white rounded-3xl disabled:opacity-50"
      >
        {isPending ? "Deleting..." : "Delete"}
      </button>
      <button
        onClick={onEdit}
        className="w-full bg-blue-600 py-2 px-4 text-white rounded-3xl"
      >
        Update
      </button>
    </div>
  );
};
