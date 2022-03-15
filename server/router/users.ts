import { Router } from "express";

import * as usersControllers from '../controllers/users';
import validate from "../validation";
import { registerRules } from "../validation/rules/register";

const usersRouter = Router();

usersRouter.post('/register', [
  registerRules(),
  validate,
],usersControllers.createUser);

export default usersRouter;