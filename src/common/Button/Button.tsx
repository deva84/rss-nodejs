import React from "react";

import styles from "./styles.module.css";
import { ButtonProps } from "../common.model";

// Module 1:
// * use this component in components: Header, Courses
// ** TASK DESCRIPTION ** - https://ebook.learn.epam.com/react-fundamentals/docs/module-1/home-task/components#button-component

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  handleClick,
  "data-testid": dataTestId,
}) => (
  <button
    className={styles.button}
    onClick={handleClick}
    data-testid={dataTestId}
  >
    {buttonText}
  </button>
);
