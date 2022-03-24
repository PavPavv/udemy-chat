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
};

export const updateUser = async (req: Request, res: Response) => {
  //  get data from client's request
  const {
    id,
    email,
    password, 
    firstName,
    lastName, 
    age, 
    sex, 
    avatar } = req.body;
  
  if (req.file) req.body.avatar = req.file.filename;
  if (typeof req.body.avatar !== 'undefined' 
    && req.body.avatar.length === 0) {
      delete req.body.avatar;
    }
  
  const updatedUser = await usersServices.updateUserService(
    { 
      id,
      email,
      password,
      firstName,
      lastName,
      age,
      sex,
      avatar,
    }
  );

  if (updatedUser) {
    return res
      .status(StatusCodes.SuccessfullyCreated)
      .json({message: `${updatedUser} been successfully updated`,});
  }

  return res
    .status(StatusCodes.InternalServerError)
    .json({message: ErrorsNames.INTERNAL_PROBLEM});
}