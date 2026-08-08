import { Formik } from "formik";
import { FormContainer } from "../common/form/FormContainer";
import { registerValSchema } from "./registerValSchema";
import { RegisterForm } from "./RegisterForm";
import { handlerRegisterSubmit } from "./handlerRegisterSubmit";
import bcrypt from "bcryptjs";

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
          const salt = bcrypt.genSaltSync(10);
          
          handlerRegisterSubmit({
            firstName: values.firstName,
            secondName: values.lastName,
            email: values.email,
            password: bcrypt.hashSync(values.password, salt),
          });
          resetForm();
        }}
      >
        <RegisterForm />
      </Formik>
    </FormContainer>
  );
};
