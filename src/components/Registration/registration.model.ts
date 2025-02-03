export interface LoginForm {
  email: string | null;
  password: string | null;
}

export interface RegistrationForm extends LoginForm {
  name: string | null;
}

export interface RegistrationErrors extends RegistrationForm {
  server: string | null;
}
