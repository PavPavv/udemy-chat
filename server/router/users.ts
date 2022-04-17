import { Router } from "express";

import * as usersControllers from '../controllers/users';
import validate from "../validation";
import { registerRules, passRules } from "../validation/rules/auth";
import { updateUserRules } from "../validation/rules/users";
import authMiddleware from "../middleware/auth";
import { fileMiddleware } from "../middleware/fileUpload";

const usersRouter = Router();

usersRouter.post('/register', [
  authMiddleware,
  registerRules(),
  validate,
],usersControllers.createUser);

usersRouter.post('/update', [
  authMiddleware,
  fileMiddleware,
  updateUserRules(),
  validate,
],usersControllers.updateUser);

export default usersRouter;