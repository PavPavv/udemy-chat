export enum AUTH_TYPES {
  AUTH_START = 'AUTH_START',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGOUT = 'LOGOUT',
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

export type UserRequest = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  age: string;
};

export type LoginRequest = {
  message: string;
  user: UserRequest;
};

export type LoginResponse = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: string;
  sex: string;
  avatar: undefined | string;
  createdAt: string;
  id: number;
  updatedAt: string;
  token: string;
};

export type authAction = {
  type: string;
  payload?: any;
};