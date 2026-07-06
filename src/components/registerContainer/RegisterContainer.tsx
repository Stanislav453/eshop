import { Formik } from "formik";
import { FormContainer } from "../common/form/FormContainer";
import { registerValSchema } from "./registerValSchema";
import { RegisterForm } from "./RegisterForm";

export const RegisterContainer = () => {
  return (
    <FormContainer hightText="Register">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptedTerms: false,
        }}
        validationSchema={registerValSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <RegisterForm />
      </Formik>
    </FormContainer>
  );
};
