import { SignUp } from "@/protocols";
import { authServices } from "@/services";
import { Request, Response } from "express";

export async function signUp(req: Request, res: Response) {
  const user = req.body as SignUp;
  delete user.confirmPassword;

  try {
    authServices.postUser(user);

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
  }
}

export async function signIn(req: Request, res: Response) {}
