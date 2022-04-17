import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import config from "../config/app";
import { StatusCodes } from "../constants/statusCodes";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];
  
  if (!token) {
    return res
      .status(StatusCodes.Unauthorized)
      .json({error: "Missing token"});
  }

  jwt.verify(token, config.appKey as string, (err, user) => {
    if (err) {
      return res
      .status(StatusCodes.Unauthorized)
      .json({ error: err, });
    }
    console.log('req in auth middleware',req);
    //req.user = user;
  });

  next();
};

export default authMiddleware;