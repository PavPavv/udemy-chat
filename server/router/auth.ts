import { Router } from "express";

import { login } from "../controllers/auth";
import validate from "../validation";
import { authRules } from "../validation/rules/auth";

const authRouter = Router();

authRouter.post('/login', [
  authRules(),
  validate,
], login);

export default authRouter;