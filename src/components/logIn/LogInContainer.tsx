import { useState } from "react";
import { FormContainer } from "../common/form/FormContainer";
import { LogInForm } from "./LogInForm";
import { SignUpPrompt } from "./SignUpPrompt";
import { Formik } from "formik";
import { logInValSchema } from "./logInValSchema";
import { handleLogInSubmit } from "./handleLogInSubmit";

export const LogInContainer = () => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <FormContainer hightText="Login">
      {errorMessage && (
        <p className="text-red-500 font-bold text-center mt-4">
          {errorMessage}
        </p>
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={logInValSchema}
        onSubmit= {async (values) => {
          setErrorMessage("");

          const success = await handleLogInSubmit({
            email: values.email,
            password: values.password,
          });

          if (!success) {
            setErrorMessage("Wrong username or password");
          }
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
