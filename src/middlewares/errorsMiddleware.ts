import { ApplicationError } from "@/protocols";
import { Request, Response } from "express";

export function handleErrorsMiddleware(
  err: ApplicationError,
  req: Request,
  res: Response
) {
  res.status(500).send({ message: err.message });
}
