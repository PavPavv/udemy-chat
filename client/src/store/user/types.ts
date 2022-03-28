export enum USER_TYPES {
  START_FETCHING = 'START_FETCHING',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  ERROR_FETCHING = 'ERROR_FETCHING',
};

export type UpdateUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  sex: string;
  avatar: string;
  id: number;
};
