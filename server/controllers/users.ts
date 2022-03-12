import { Request, Response } from 'express';

import { ErrorsNames } from '../constants/errors';
import { StatusCodes } from '../constants/statusCodes';
import * as usersServices from '../services/users';

export const createUser = async (req: Request, res: Response) => {
  //  get data from client's request
  const { email, password, firstName, lastName, age, sex } = req.body;
  const user = await usersServices.createUserService(
    { 
      email,
      password,
      firstName,
      lastName,
      age,
      sex,
    }
  );

  if (user) {
    return res
      .status(StatusCodes.SuccessfullyCreated)
      .json({message: `${user} been successfully created`,});
  }

  return res
    .status(StatusCodes.InternalServerError)
    .json({message: ErrorsNames.INTERNAL_PROBLEM});
}