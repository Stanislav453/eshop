       import * as Yup from "yup";
       
       export const registerValSchema = Yup.object({
                 firstName: Yup.string()
                   .max(15, "Must be 15 characters or less")
                   .required("Required"),
                 lastName: Yup.string()
                   .max(20, "Must be 20 characters or less")
                   .required("Required"),
                 email: Yup.string().email("Invalid").required("Required"),
                 password: Yup.string()
                   .min(6, "Password must be at least 6 characters")
                   .required("Required"),
                 confirmPassword: Yup.string()
                   .oneOf([Yup.ref("password")], "Passwords must match")
                   .required("Required"),
                 acceptedTerms: Yup.boolean()
                   .required("Required")
                   .oneOf([true], "You must accept the terms and conditions."),
               })