import type { FormContainerType } from "../../../type";

export const FormContainer = ({ children, hightText }: FormContainerType) => {
  return (
    <div className="flex justify-center my-56">
      <div className="w-full max-w-4xl p-12 bg-box-brand-color">
        <h2 className="text-center font-bold text-3xl">{hightText}</h2>
        {children}
      </div>
    </div>
  );
};
