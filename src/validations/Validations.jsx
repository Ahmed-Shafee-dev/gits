import * as yup from "yup";

export const loginSchema = yup.object({
    Email: yup.string().email("Invalid email").required("Email is empty"),
    Password: yup.string().required("Password is empty"),
});

export const signUpSchema = yup.object({
    Email: yup.string().email("Invalid email").required("Email is empty"),
    Number: yup.string().required("Number is empty"),
    Address: yup.string().required("Your address is empty"),
    Password: yup.string().required("Password is empty"),
});