import { body, ValidationChain } from 'express-validator';

export const updateUserRules = (): any => {
  return [
    // body('firstName').notEmpty(),
    // body('lastName').notEmpty(),
    // body('email').isEmail(),
    // body('password').optional().isLength({min: 8}),
    // body('age').notEmpty(),
    // body('sex').notEmpty(),
  ]
};