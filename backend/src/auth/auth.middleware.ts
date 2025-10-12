
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

  if (token == null) {
    return res.sendStatus(401); // Unauthorized if no token is present
  }

  jwt.verify(token, config.jwtSecret, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403); // Forbidden if token is invalid or expired
    }

    req.user = user; // Attach user payload to the request object
    next(); // Proceed to the next middleware or route handler
  });
};