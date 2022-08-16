import type { Request, Response, NextFunction } from 'express';
import { StatusCodes as Status } from 'http-status-codes';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(Status.BAD_REQUEST).send('Token is missing');
  }

  next();
};
