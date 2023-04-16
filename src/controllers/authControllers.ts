import { SignIn, SignUp } from "@/protocols";
import { authServices } from "@/services";
import { Request, Response } from "express";

export async function signUp(req: Request, res: Response) {
  const user = req.body as SignUp;
  delete user.confirmPassword;

  try {
    await authServices.postUser(user);

    res.sendStatus(201);
  } catch (err) {
    if (err.name === "conflictError") {
      return res.status(409).send({ message: err.message });
    }

    res.status(500).send({ message: err.message });
  }
}

export async function signIn(req: Request, res: Response) {
  const dataLogin = req.body as SignIn;

  try {
    const token= await authServices.userLogin(dataLogin);

    res.status(200).send(token);
  } catch (err) {
    if (err.name === "badRequestError") {
      return res.status(400).send({ message: err.message });
    }

    res.status(500).send({ message: err.message });
  }
}
