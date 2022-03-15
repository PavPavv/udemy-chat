export enum AUTH_TYPES {
  AUTH_START = 'AUTH_START',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  AUTH_ERROR = 'AUTH_ERROR',
};

export type LoginInterface = {
  email: string;
  password: string;
};

export type RegisterInterface = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
  sex: string;
};

export type UserResponse = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  age: string;
};

export type LoginResponse = {
  message: string;
  user: UserResponse;
};

export type authAction = {
  type: string;
  payload?: any;
};