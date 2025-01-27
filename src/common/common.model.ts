import React from "react";

export interface ButtonProps {
  buttonText: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
  "data-testid"?: string;
}

export interface InputProps {
  placeholderText: string;
  labelText: string;
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  "data-testid"?: string;
}
