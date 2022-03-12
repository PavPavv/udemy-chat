import { Router, Request, Response } from 'express';

import authRouter from './auth';
import usersRouter from './users'

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.send('Home screen, bro!');
});

router.use('/auth', authRouter);
router.use('/users', usersRouter);

export default router;