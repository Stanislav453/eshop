import { useField } from "formik";

type SelectInputType = {
  label: string;
  name: string;
  options: string[];
};

export const SelectInput = ({ label, name, options }: SelectInputType) => {
  const [field, meta] = useField({ name });
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <select className="p-2" id={name} {...field}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="text-red-600">
          {label} is {meta.error}
        </div>
      ) : null}
    </div>
  );
};
