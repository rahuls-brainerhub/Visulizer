import * as yup from "yup";

const touchSchema = yup.object({
    name: yup.string().required("Name is required").matches(/^[A-Za-z]+$/, "Name can only contain alphabetic characters"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    message: yup.string()
});

export { touchSchema }