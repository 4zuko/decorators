export type Nullable<T> = T | null

export interface UserDetails {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ErrorHandler {
  getErrorMessage(): string
}
