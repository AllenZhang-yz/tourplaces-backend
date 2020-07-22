import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { HttpError } from '../models/httpError';

interface IUserData {
  userId: string;
}

declare global {
  namespace Express {
    interface Request {
      userData?: IUserData;
    }
  }
}

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    const error = new HttpError('Authentication failed!', 401);
    return next(error);
  }
  const contentArr = authHeader.split(' '); //Authorization: 'Bearer TOKEN'
  if (contentArr.length !== 2 || contentArr[0] !== 'Bearer') {
    const error = new HttpError('Authentication failed!', 401);
    return next(error);
  }
  const token = contentArr[1];
  const decodedToken = jwt.verify(token, process.env.JWT_KEY!) as any;
  if (!decodedToken) {
    const error = new HttpError('Authentication failed!', 401);
    return next(error);
  }
  req.userData = { userId: decodedToken.userId };
  next();
};
