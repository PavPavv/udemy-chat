import { NewUser } from '../types/users';
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