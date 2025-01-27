import React from "react";

import styles from "./styles.module.css";
import { InputProps } from "../common.model";

export const Input: React.FC<InputProps> = ({
  placeholderText,
  labelText,
  value,
  onChange,
  hasError,
  "data-testid": dataTestId,
}) => (
  <label className={styles.label}>
    {labelText}
    <input
      onChange={onChange}
      placeholder={placeholderText}
      value={value ?? ""}
      className={`${styles.input} ${hasError ? styles.error : ""}`}
      data-testid={dataTestId}
    />
  </label>
);
