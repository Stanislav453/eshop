import { Form, useFormikContext } from "formik";
import { TextInput } from "../common/form/TextInput";

export const LogInForm = () => {
  const { isSubmitting } = useFormikContext();

  return (
    <Form className="flex flex-col gap-8 mt-8" action="p">
      <TextInput label="Email Address" name="email" type="email" />
      <TextInput label="Password" name="password" type="password" />
      <button
        className="self-center mt-8 px-8 py-4 bg-brand-color text-white font-bold bg-neutral-primary hover:bg-primary-hover cursor-pointer transition-colors duration-300 disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </Form>
  );
};
