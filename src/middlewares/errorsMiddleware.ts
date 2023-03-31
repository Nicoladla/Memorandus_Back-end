import { Request, Response } from "express";

export function handleErrorsMiddleware(err, req: Request, res: Response) {
  res.status(500).send({ message: err.message });
}
//fazer protocolo do parametro err