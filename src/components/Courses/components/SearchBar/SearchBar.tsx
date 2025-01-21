import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Input } from "../../../../common";
import { SearchBarProps } from "../../courses.model";

export const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const forbiddenSymbols = /[@#$%^&]/;
    const value = e.target.value?.replace(/\s+/g, " ").trim();

    if (value === "") {
      setInputValue(null);
    } else if (!forbiddenSymbols.test(value)) {
      setInputValue(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <Input
          placeholderText="Input text"
          labelText=""
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <Button
        buttonText="Search"
        handleClick={() => handleSearch(inputValue)}
      />
    </div>
  );
};
