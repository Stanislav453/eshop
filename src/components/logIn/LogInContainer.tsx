import { FormContainer } from "../common/form/FormContainer";
import { LogInForm } from "./LogInForm";
import { SignUpPrompt } from "./SignUpPrompt";
import { Formik } from "formik";
import { logInValSchema } from "./logInValSchema";
import { handleLogInSubmit } from "./handleLogInSubmit";

export const LogInContainer = () => {
  return (
    <FormContainer hightText="Login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={logInValSchema}
        onSubmit={(values, { resetForm }) => {
          handleLogInSubmit({
            email: values.email,
            password: values.password,
          });

          resetForm();
        }}
      >
        <>
          <LogInForm />
          <SignUpPrompt />
        </>
      </Formik>
    </FormContainer>
  );
};
