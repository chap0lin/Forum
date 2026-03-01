
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "./errorMiddleware";
import { UserModel } from "../../models/User";

interface JwtPayload {
    id: number;
}

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export const protect = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(new AppError("Not authorized to access this route", 401));
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || "default_secret"
        ) as JwtPayload;

        const user = await UserModel.findById(decoded.id);

        if (!user) {
            return next(new AppError("The user belonging to this token does no longer exist.", 401));
        }

        req.user = user;
        next();
    } catch (error) {
        return next(new AppError("Not authorized to access this route", 401));
    }
};

export const restrictTo = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!roles.includes((req as any).user.role)) {
            return next(
                new AppError("You do not have permission to perform this action", 403)
            );
        }
        next();
    };
};
