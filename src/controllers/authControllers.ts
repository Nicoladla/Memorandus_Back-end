import { SignUp } from "@/protocols";
import { authServices } from "@/services";
import { Request, Response } from "express";

export async function signUp(req: Request, res: Response) {
  const user = req.body as SignUp;
  delete user.confirmPassword;

  try {
    await authServices.postUser(user);

    res.sendStatus(201);
  } catch (err) {
    res.status(409).send({message: err.message});
  }
}

export async function signIn(req: Request, res: Response) {}
