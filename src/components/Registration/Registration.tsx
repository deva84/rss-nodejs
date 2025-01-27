// // Module 2.
// // * uncomment this component (ctrl + a => ctrl + /)
// // * finish markup according to the figma https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-219&mode=design&t=0FIG0iRzKcD0s16M-0
// // * add validation for fields: all fields are required. Show validation message. https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-257&mode=design&t=0FIG0iRzKcD0s16M-0
// // * render this component by route '/registration'
// // * submit form data and make POST API request '/registration'.
// // * after successful registration navigates to '/login' route.
// // * component should have a link to the Login page (see design)
// // ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-2/home-task/components#registration-new-component
//
import React, { useState } from "react";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button, Input, Loader } from "../../common";
import { getUrl, registrationSchema } from "../../helpers";
import { RegistrationForm } from "../../helpers/validationSchemas";
import { ValidationError } from "yup";
import { useFetch } from "../../hooks";

export const Registration = () => {
  const [formValues, setFormValues] = useState<RegistrationForm>({
    name: null,
    email: null,
    password: null,
  });
  const [errors, setErrors] = useState<RegistrationForm>({
    name: null,
    email: null,
    password: null,
  });
  const [toFetch, setToFetch] = useState(false);

  const { loading } = useFetch({
    toFetch,
    url: getUrl("register"),
    method: "POST",
    body: JSON.stringify(formValues),
    headers: { "Content-Type": "application/json" },
    navigateLink: "/login",
  });

  const inputs: string[] = ["name", "email", "password"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    input: string
  ): void => {
    setErrors({ ...errors, [input]: null });
    setFormValues({ ...formValues, [input]: e.target.value });
  };

  const validateForm = async (): Promise<void> => {
    try {
      await registrationSchema.validate(formValues, {
        abortEarly: false,
      });
      setToFetch(true);
    } catch (err: any) {
      const errors = err.inner.reduce(
        (acc: ValidationError, item: ValidationError) => {
          const key = item.path as keyof RegistrationForm;
          acc[key] = item.message;
          return acc;
        },
        {} as RegistrationForm
      );
      setToFetch(false);
      setErrors(errors);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await validateForm();
  };

  const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Registration {loading ? "it is loading" : "it does not load"}</h1>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <div key={input} className={styles.inputContainer}>
                <Input
                  value={formValues[input]}
                  placeholderText={input}
                  labelText={capitalize(input)}
                  onChange={(e) => handleInputChange(e, input)}
                  hasError={Boolean(errors[input])}
                />
                {
                  <p
                    className={styles.error}
                    style={{ visibility: errors[input] ? "visible" : "hidden" }}
                  >
                    {errors[input] || "\u00A0"}
                  </p>
                }
              </div>
            ))}
            <Button type="submit" buttonText="Register" />
          </form>
          <p>
            If you have an account you may&nbsp;
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </p>
        </div>
      </div>
      {loading && (
        <div className={styles.overlay}>
          <Loader />
        </div>
      )}
    </>
  );
};

export default Registration;
