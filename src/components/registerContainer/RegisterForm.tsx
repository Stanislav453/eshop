import { Form } from "formik";
import { TextInput } from "../common/form/TextInput";
import { Checkbox } from "../common/form/CheckBox";

export const RegisterForm = () => {
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
      <button type="submit">Submit</button>
    </Form>
  );
};
