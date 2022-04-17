import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import * as authDataAccess from '../data-access/auth';
import appConfig from '../config/app';
import { User } from '../types/users';

export const generateTokenService = (user: User) => {
  user.password = '';
  const token = jwt.sign(user, appConfig.appKey as string, {expiresIn: 860000});
  const refreshToken = jwt.sign(user, appConfig.appKey as string, {expiresIn: 860000})
  return {
    ...{
      user,
    },
    ...{
      token,
      refreshToken,
    },
  }
};

export const loginService = async (email: string, password: string) => {
  const user = await authDataAccess.getUserByEmail(email);
  
  if (user) {
    if (!bcrypt.compareSync(password, user.password)) {
      return null;
    }

    const userWithToken = generateTokenService(user.get({ raw: true, }));
    userWithToken.user.avatar = user.avatar;
    return userWithToken;
  }

  return null;
};