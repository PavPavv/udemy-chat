import { NewUser, UpdatedUser } from '../types/users';
import * as usersDataAccess from '../data-access/users';
import { generateTokenService } from '../services/auth';

export const createUserService = async (userObj: NewUser) => {
  const { email, password, firstName, lastName, age, sex } = userObj;
  const newUser = await usersDataAccess.createUser(email, password, firstName, lastName, age, sex);

  if (newUser) {
    const userWithToken = generateTokenService(newUser.get({ raw: true, }));
    return `${firstName} ${lastName}`
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

  console.log('updatedUser',updatedUser)

  if (updatedUser) {
    //  const userWithToken = generateTokenService(updatedUser.get({ raw: true, }));
    return `${firstName} ${lastName}`;
  }

  return null;
};