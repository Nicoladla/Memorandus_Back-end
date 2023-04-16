import { ApplicationError } from "@/protocols";
import { Request, Response } from "express";

export function handleErrorsMiddleware(
  err: ApplicationError,
  req: Request,
  res: Response
) {
  console.log("oi");
  if (err.name === "conflictError") {
    return res.status(409).send({ message: err.message });
  }

  if (err.name === "badRequestError") {
    return res.status(400).send({ message: err.message });
  }

  res.status(500).send({ message: err.message });
}
