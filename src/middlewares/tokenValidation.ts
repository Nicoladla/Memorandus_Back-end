import { authRepositories } from "@/repositories";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function tokenValidation(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  try {
    const { userId } = jwt.verify(token, process.env.SECRET_JWT) as JWTPayload;
    const userExist = await authRepositories.getUserById(userId);

    if (!userExist) return res.sendStatus(401);

    req.userId = userId;
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
}

type JWTPayload = { userId: number };
export type AuthenticatedRequest = Request & JWTPayload;
