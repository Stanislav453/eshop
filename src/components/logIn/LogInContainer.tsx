import { FormContainer } from "../common/form/FormContainer";
import { LogInForm } from "./LogInForm";
import { SignUpPrompt } from "./SignUpPrompt";

export const LogInContainer = () => {
  return (
    <FormContainer hightText="Login">
      <LogInForm />
      <SignUpPrompt />
    </FormContainer>
  );
};
