import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

// Estende o Request do Express para incluir a propriedade 'user'
interface AuthRequest extends Request {
  user?: any; // Temporário: depois podemos substituir por tipo mais específico
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer TOKEN"

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, config.jwtSecret, (err: any, user: any) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    req.user = user; // agora TypeScript aceita
    next(); // segue para o próximo middleware
  });
};
