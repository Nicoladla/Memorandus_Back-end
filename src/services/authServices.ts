import { InsertUser, User } from "@/protocols";
import { authRepositories } from "@/repositories";
import { users } from "@prisma/client";

async function postUser(user: InsertUser) {

}

export const authServices = {
  postUser,
};
