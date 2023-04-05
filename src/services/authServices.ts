import bcrypt from "bcrypt";

import { conflictError } from "@/errors";
import { InsertUser, User } from "@/protocols";
import { authRepositories } from "@/repositories";

async function postUser(user: InsertUser) {
  const emailExist: User = await authRepositories.getEmail(user.email);
  if (emailExist) throw conflictError("Existing email");

  const hashPassword = bcrypt.hashSync(user.password, 10);

  await authRepositories.postUser({
    ...user,
    password: hashPassword,
  });
}

export const authServices = {
  postUser,
};
