import { Form, useFormikContext } from "formik";
import { TextInput } from "../common/form/TextInput";
import { Checkbox } from "../common/form/CheckBox";

export const RegisterForm = () => {
  const { isSubmitting } = useFormikContext();

  return (
    <Form className="flex flex-col gap-4">
      <TextInput label="First Name" name="firstName" type="text" />
      <TextInput label="Last Name" name="lastName" type="text" />
      <TextInput label="Email Address" name="email" type="email" />
      <TextInput label="Password" name="password" type="password" />
      <TextInput
        label="Confirm Password"
        name="confirmPassword"
        type="password"
      />
      <Checkbox name="acceptedTerms">
        I accept the terms and conditions
      </Checkbox>
      <button
        className="self-center mt-8 px-8 py-4 bg-brand-color text-white font-bold bg-neutral-primary hover:bg-primary-hover cursor-pointer transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registering..." : "Submit"}
      </button>
    </Form>
  );
};
