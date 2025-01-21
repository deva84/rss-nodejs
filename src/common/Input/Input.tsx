import React from "react";

import styles from "./styles.module.css";
import { InputProps } from "../common.model";

export const Input: React.FC<InputProps> = ({
  placeholderText,
  labelText,
  value,
  onChange,
  "data-testid": dataTestId,
}) => (
  <label className={styles.label}>
    {labelText}
    <input
      onChange={onChange}
      placeholder={placeholderText}
      value={value ?? ""}
      className={styles.input}
      data-testid={dataTestId}
    />
  </label>
);
