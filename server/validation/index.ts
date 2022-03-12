import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { StatusCodes } from '../constants/statusCodes';
import { ErrorsNames } from '../constants/errors';

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BadRequest).json({message: ErrorsNames.VALIDATION_ERROR});
  }

  next();
}

export default validate;