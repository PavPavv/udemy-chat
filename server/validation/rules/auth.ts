import { body } from 'express-validator';

export const authRules = (): any => {  
  return [
    body('email').isEmail(),
    body('password').isLength({min: 6}),
  ]
};

export const registerRules = (): any => {  
  return [
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({min: 6}),
    body('age').notEmpty(),
    body('sex').notEmpty(),
  ]
};