import { useField } from "formik";

type TextareaInputType = {
  label: string;
  name: string;
  rows?: number;
};

export const TextareaInput = ({ label, name, rows = 4 }: TextareaInputType) => {
  const [field, meta] = useField({ name });
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <textarea className="p-2" id={name} rows={rows} {...field} />
      {meta.touched && meta.error ? (
        <div className="text-red-600">
          {label} is {meta.error}
        </div>
      ) : null}
    </div>
  );
};
