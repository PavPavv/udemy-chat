export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  sex: string,
  age: number,
  createdAt: string;
  updatedAt: string;
};

export type NewUser = Omit<User, "id" | "avatar" | "createdAt" | "updatedAt">;
export type UpdatedUser = Omit<User, "createdAt" | "updatedAt">;