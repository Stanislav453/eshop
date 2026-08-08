import * as Yup from "yup";

export const logInValSchema = Yup.object({
  email: Yup.string().email("Invalid").required("Required"),
  password: Yup.string().required("Required"),
});
