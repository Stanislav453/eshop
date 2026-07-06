import { useField } from "formik";

type CheckboxProps = {
  name: string;
  children: React.ReactNode;
};

export const Checkbox = ({ children, name }: CheckboxProps) => {
  const [field, meta] = useField({ name, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};
