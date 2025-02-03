import { ErrorType } from "../error/error.model";

export interface FetchProps {
  toFetch: boolean;
  resetToFetch: () => void;
  url: string;
  method?: string;
  body?: BodyInit | null;
  headers?: HeadersInit;
  navigateLink?: string;
}

export interface ResponseData {
  successful: boolean;
  result?: string;
  errors?: string[];
}

export interface FetchError {
  errors: string[];
  type: ErrorType;
}

export type ApiResponseType = "data" | "error";
