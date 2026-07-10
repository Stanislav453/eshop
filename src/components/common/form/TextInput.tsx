import { useField } from "formik";

type TextInputType = {
  label: string;
  name: string;
  type: "text" | "email" | "password";
  
};

export const TextInput = ({ label, name, type}: TextInputType) => {
  const [field, meta] = useField({ name});
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input className="p-2" type={type}  {...field} />
      {meta.touched && meta.error ? (
        <div className="text-red-600">{label} is {meta.error}</div>
      ) : null}
    </div>
  );
};
