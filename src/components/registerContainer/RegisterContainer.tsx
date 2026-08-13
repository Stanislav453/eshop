import { Formik } from "formik";
import { FormContainer } from "../common/form/FormContainer";
import { registerValSchema } from "./registerValSchema";
import { RegisterForm } from "./RegisterForm";
import { handlerRegisterSubmit } from "./handlerRegisterSubmit";
import bcrypt from "bcryptjs";
import { handleLogInSubmit } from "../logIn/handleLogInSubmit";

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
        onSubmit={async (values, { resetForm }) => {
          const salt = bcrypt.genSaltSync(10);

          const registered = await handlerRegisterSubmit({
            firstName: values.firstName,
            secondName: values.lastName,
            email: values.email,
            password: bcrypt.hashSync(values.password, salt),
          });

          if (registered) {
            await handleLogInSubmit({
              email: values.email,
              password: values.password,
            });
          }

          resetForm();
        }}
      >
        <RegisterForm />
      </Formik>
    </FormContainer>
  );
};
