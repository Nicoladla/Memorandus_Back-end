import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { badRequestError, conflictError } from "@/errors";
import { InsertUser, SignIn, User } from "@/protocols";
import { authRepositories } from "@/repositories";

async function postUser(user: InsertUser) {
  const emailExist: User = await authRepositories.getEmail(user.email);
  if (emailExist) throw conflictError("This email is already registered");

  const hashPassword = bcrypt.hashSync(user.password, 10);

  await authRepositories.postUser({
    ...user,
    password: hashPassword,
  });
}

async function userLogin(dataLogin: SignIn) {
  const userExist: User = await authRepositories.getEmail(dataLogin.email);

  if (
    !userExist ||
    !bcrypt.compareSync(dataLogin.password, userExist?.password)
  ) {
    throw badRequestError("Invalid email or password");
  }

  const token = jwt.sign({ userId: userExist.id }, process.env.SECRET_JWT, {
    expiresIn: 21600,
  });

  return token;
}

export const authServices = {
  postUser,
  userLogin,
};
