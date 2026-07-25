import { Formik } from "formik";
import { FormContainer } from "../common/form/FormContainer";
import { registerValSchema } from "./registerValSchema";
import { RegisterForm } from "./RegisterForm";
import { handlerRegisterSubmit } from "./handlerRegisterSubmit";

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
        onSubmit={(values, { resetForm }) => {
          handlerRegisterSubmit({
            firstName: values.firstName,
            secondName: values.lastName,
            email: values.email,
            password: values.password,
          });
          resetForm();
        }}
      >
        <RegisterForm  />
      </Formik>
    </FormContainer>
  );
};
