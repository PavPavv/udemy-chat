import { NewUser, UpdatedUser } from '../types/users';
import * as usersDataAccess from '../data-access/users';
import { generateTokenService } from '../services/auth';

export const createUserService = async (userObj: NewUser) => {
  const { email, password, firstName, lastName, age, sex } = userObj;
  try {
    const newUser = await usersDataAccess.createUser(email, password, firstName, lastName, age, sex);

    if (newUser) {
      const userWithToken = generateTokenService(newUser.get({ raw: true, }));
      return `${firstName} ${lastName}`
    }
  } catch (err: any) {
    console.log('create user error',err)
  }

  return null;
};

export const updateUserService = async (userObj: UpdatedUser) => {
  const {
    id,
    email,
    password,
    firstName,
    lastName,
    age,
    sex,
    avatar
  } = userObj;

  try {
    const updatedUser = await usersDataAccess.updateUser(
      id,
      email,
      password,
      firstName,
      lastName,
      age,
      sex,
      avatar
    );
  
    if (updatedUser) {
      //  const userWithToken = generateTokenService(updatedUser.get({ raw: true, }));
      //  return `${firstName} ${lastName}`;
      return updatedUser;
    }
  } catch (err: any) {
    console.log('update user error', err)
  }

  return null;
};