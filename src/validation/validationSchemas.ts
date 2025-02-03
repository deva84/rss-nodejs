import { object, ObjectSchema, string } from "yup";
import { LoginForm, RegistrationForm } from "../components";

const commonSchema = {
  email: string()
    .email("Email should have correct format")
    .required("Email is required"),
  password: string()
    .min(6, "Password should have a minimum length of 6")
    .max(30, "Password should have a maximum length of 30")
    .matches(
      /^[a-zA-Z0-9]*$/,
      "Password should contain only letters and numbers"
    )
    .required("Password is required"),
};

const loginSchema: ObjectSchema<LoginForm> = object(commonSchema);

const registrationSchema: ObjectSchema<RegistrationForm> = object({
  name: string()
    .min(3, "Name should have a minimum length of 3")
    .max(30, "Name should have a maximum length of 30")
    .matches(/^[a-zA-Z]+$/, "Name should contain only letters")
    .required("Name is required"),
  ...commonSchema,
});

export { loginSchema, registrationSchema };
