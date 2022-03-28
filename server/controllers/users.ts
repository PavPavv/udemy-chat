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
  if (req.file) {
    req.body.avatar = req.file.filename;
  }
  if (typeof req.body.avatar !== 'undefined' 
    && req.body.avatar.length === 0) {
      delete req.body.avatar;
  }
  
  console.log('REQ', req.body)

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
      .status(StatusCodes.OK)
      .json({
        message: `${updatedUser.firstName} ${updatedUser.lastName} been successfully updated`,
        user: updatedUser,
      });
  }

  return res
    .status(StatusCodes.InternalServerError)
    .json({message: ErrorsNames.INTERNAL_PROBLEM});
}