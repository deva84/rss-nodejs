import { ErrorType } from "./error.model";

export class ApiError extends Error {
  public errors?: string[];
  public type?: ErrorType;

  constructor(message?: string, errors?: string[], type?: ErrorType) {
    super(message);
    this.errors = errors;
    this.type = type;
  }
}
