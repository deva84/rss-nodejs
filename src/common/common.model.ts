export interface ButtonProps {
  buttonText: string;
  handleClick: () => void;
  "data-testid"?: string;
}

export interface InputProps {
  placeholderText: string;
  labelText: string;
  value?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  "data-testid"?: string;
}
