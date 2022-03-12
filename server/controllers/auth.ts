import { Request, Response } from 'express';

import { loginService } from '../services/auth';
import { ErrorsNames } from '../constants/errors';
import { StatusCodes } from '../constants/statusCodes';

export const login = async (req: Request, res: Response) => {
  //  get data from client's request
  const { email, password } = req.body;
  const user = await loginService(email, password);

  //  check if user found
  if (user) {
    return res.status(StatusCodes.OK).json({
      user,
      message: 'User successfully authorized',
    });
  }

  return res.status(StatusCodes.NotFound).json({message: ErrorsNames.BAD_LOGIN_OR_PASSWORD});

};