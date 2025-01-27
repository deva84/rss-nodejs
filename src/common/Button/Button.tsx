import React from "react";

import styles from "./styles.module.css";
import { ButtonProps } from "../common.model";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  handleClick,
  type = "button",
  "data-testid": dataTestId,
}) => (
  <button
    type={type}
    className={styles.button}
    onClick={handleClick ?? noop}
    data-testid={dataTestId}
  >
    {buttonText}
  </button>
);
